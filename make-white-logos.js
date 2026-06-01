const sharp = require('sharp');
const path = require('path');

const imgDir = path.join(__dirname, 'src/assets/images');

const logos = [
  { src: 'Logo Yobante - Version 2.png',  out: 'Logo Yobante - Version 2 Blanc.png' },
  { src: 'Logo Yobante Rek.png',           out: 'Logo Yobante Rek Blanc.png' },
  { src: 'Logo Yobante Boutique.png',      out: 'Logo Yobante Boutique Blanc.png' },
];

async function processLogo({ src, out }) {
  const inputPath  = path.join(imgDir, src);
  const outputPath = path.join(imgDir, out);

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const CH = 4;

  // Detect background color by sampling pixels just inside each corner
  const offsets = [6, 10, 15];
  const counts = {};
  for (const o of offsets) {
    for (const [x, y] of [[o,o],[width-1-o,o],[o,height-1-o],[width-1-o,height-1-o]]) {
      const i = (y * width + x) * CH;
      if (data[i+3] < 10) continue; // skip transparent
      const key = [
        Math.round(data[i]   / 15) * 15,
        Math.round(data[i+1] / 15) * 15,
        Math.round(data[i+2] / 15) * 15,
      ].join(',');
      counts[key] = (counts[key] || 0) + 1;
    }
  }
  const bgKey = Object.entries(counts).sort((a,b) => b[1]-a[1])[0][0];
  const [bgR, bgG, bgB] = bgKey.split(',').map(Number);
  console.log(`  ${src} → bg ≈ rgb(${bgR},${bgG},${bgB})`);

  const TOL = 45;
  const isBg = (r,g,b,a) =>
    a < 10 ||
    (Math.abs(r-bgR) + Math.abs(g-bgG) + Math.abs(b-bgB)) < TOL * 3;

  // Flood-fill from every edge pixel
  const newData = Buffer.from(data);
  const visited = new Uint8Array(width * height);
  const queue   = [];

  for (let x = 0; x < width;  x++) { queue.push([x, 0]); queue.push([x, height-1]); }
  for (let y = 1; y < height-1; y++) { queue.push([0, y]); queue.push([width-1, y]); }

  while (queue.length) {
    const [x, y] = queue.pop();
    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    const flat = y * width + x;
    if (visited[flat]) continue;
    visited[flat] = 1;
    const i = flat * CH;
    if (isBg(data[i], data[i+1], data[i+2], data[i+3])) {
      newData[i]   = 255;
      newData[i+1] = 255;
      newData[i+2] = 255;
      newData[i+3] = 255;
      queue.push([x+1,y],[x-1,y],[x,y+1],[x,y-1]);
    }
  }

  await sharp(newData, { raw: { width, height, channels: CH } })
    .png()
    .toFile(outputPath);

  console.log(`  ✓ Sauvegardé : ${out}`);
}

(async () => {
  for (const logo of logos) {
    console.log(`Traitement de ${logo.src}…`);
    await processLogo(logo);
  }
  console.log('\nTous les logos sont prêts.');
})();
