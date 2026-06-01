/**
 * Reproduit les logos originaux sur fond blanc.
 * Méthode : flood-fill depuis les bords (fond + pixels transparents → blanc).
 * Le contenu du logo (couleurs, formes) est préservé à l'identique.
 */
const sharp = require('sharp');
const path  = require('path');

const imgDir = path.join(__dirname, 'src/assets/images');

async function toWhiteBg(srcFile, outFile) {
  const inputPath  = path.join(imgDir, srcFile);
  const outputPath = path.join(imgDir, outFile);

  // Lire avec canal alpha forcé
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const CH = 4;

  // ── Détecter la couleur de fond depuis les pixels opaques des bords ──
  let bgR = -1, bgG = -1, bgB = -1;
  const edgeSamples = [];
  for (let x = 0; x < width; x += Math.floor(width / 40)) {
    edgeSamples.push([x, 0], [x, height - 1]);
  }
  for (let y = 0; y < height; y += Math.floor(height / 40)) {
    edgeSamples.push([0, y], [width - 1, y]);
  }
  const colorFreq = {};
  for (const [x, y] of edgeSamples) {
    const i = (y * width + x) * CH;
    const a = data[i + 3];
    if (a < 20) continue; // transparent → skip
    const key = [Math.round(data[i]/10)*10, Math.round(data[i+1]/10)*10, Math.round(data[i+2]/10)*10].join(',');
    colorFreq[key] = (colorFreq[key] || 0) + 1;
  }
  const topBg = Object.entries(colorFreq).sort((a, b) => b[1] - a[1])[0];
  if (topBg) {
    [bgR, bgG, bgB] = topBg[0].split(',').map(Number);
  }
  console.log(`  ${srcFile} → fond détecté : rgb(${bgR},${bgG},${bgB})`);

  const TOL = 40; // tolérance de correspondance couleur de fond

  const isBg = (r, g, b, a) =>
    a < 20 ||   // transparent = appartient au fond
    (bgR >= 0 &&
      Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB) < TOL * 3);

  // ── Flood-fill BFS depuis tous les pixels de bord ──
  const newData = Buffer.from(data);
  const visited = new Uint8Array(width * height);
  const queue   = [];

  for (let x = 0; x < width; x++) {
    queue.push([x, 0]);
    queue.push([x, height - 1]);
  }
  for (let y = 1; y < height - 1; y++) {
    queue.push([0, y]);
    queue.push([width - 1, y]);
  }

  while (queue.length) {
    const item = queue.pop();
    const x = item[0], y = item[1];
    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    const flat = y * width + x;
    if (visited[flat]) continue;
    visited[flat] = 1;

    const i = flat * CH;
    const [r, g, b, a] = [data[i], data[i+1], data[i+2], data[i+3]];

    if (isBg(r, g, b, a)) {
      // Remplacer par blanc opaque
      newData[i]     = 255;
      newData[i + 1] = 255;
      newData[i + 2] = 255;
      newData[i + 3] = 255;
      queue.push([x+1,y],[x-1,y],[x,y+1],[x,y-1]);
    }
  }

  // Sauvegarder
  await sharp(newData, { raw: { width, height, channels: CH } })
    .png()
    .toFile(outputPath);

  console.log(`  ✓ Sauvegardé : ${outFile}`);
}

// ── Version transparente pour le footer (à partir du Blanc) ──
async function toTransparent(srcFile, outFile) {
  const inputPath  = path.join(imgDir, srcFile);
  const outputPath = path.join(imgDir, outFile);

  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const CH = 4;

  const newData = Buffer.from(data);
  const visited = new Uint8Array(width * height);
  const queue   = [];

  // bg = blanc (> 245 sur les 3 canaux)
  const isBg = (r, g, b, a) => a < 20 || (r > 245 && g > 245 && b > 245);

  for (let x = 0; x < width; x++) { queue.push([x,0]); queue.push([x,height-1]); }
  for (let y = 1; y < height-1; y++) { queue.push([0,y]); queue.push([width-1,y]); }

  while (queue.length) {
    const item = queue.pop();
    const x = item[0], y = item[1];
    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    const flat = y * width + x;
    if (visited[flat]) continue;
    visited[flat] = 1;
    const i = flat * CH;
    if (isBg(data[i], data[i+1], data[i+2], data[i+3])) {
      newData[i]=0; newData[i+1]=0; newData[i+2]=0; newData[i+3]=0;
      queue.push([x+1,y],[x-1,y],[x,y+1],[x,y-1]);
    }
  }

  await sharp(newData, { raw:{width,height,channels:CH} }).png().toFile(outputPath);
  console.log(`  ✓ Transparent : ${outFile}`);
}

(async () => {
  console.log('\n── Reproduction fond blanc depuis originaux ──');

  await toWhiteBg(
    'Logo Yobante - Version 2.png',
    'Logo Yobante - Version 2 Blanc.png'
  );
  await toWhiteBg(
    'Logo Yobante Rek.png',
    'Logo Yobante Rek Blanc.png'
  );
  await toWhiteBg(
    'Logo Yobante Boutique.png',
    'Logo Yobante Boutique Blanc.png'
  );

  console.log('\n── Version transparente footer ──');
  await toTransparent(
    'Logo Yobante - Version 2 Blanc.png',
    'Logo Yobante - Version 2 Transparent.png'
  );

  console.log('\nTous les logos reproduits avec fond blanc.');
})();
