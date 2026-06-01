/**
 * Remplace les pixels jaunes dans les logos Blanc
 * pour unifier l'icône en dark-blue monochrome.
 * Jaune : R>170 & G>140 & B<100
 * Bleu-clair icône : R<80 & G<100 & B>150 & B<210 (bleu différent du texte #1E3A8A)
 * → remplacés par #1E3A8A (30,58,138)
 */
const sharp = require('sharp');
const path  = require('path');

const imgDir = path.join(__dirname, 'src/assets/images');

const TARGET_R = 30, TARGET_G = 58, TARGET_B = 138; // #1E3A8A

function isYellow(r, g, b) {
  return r > 170 && g > 130 && b < 110;
}

async function unifyIconColors(filename) {
  const fullPath = path.join(imgDir, filename);

  const { data, info } = await sharp(fullPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const CH = 4;
  const newData = Buffer.from(data);
  let changed = 0;

  for (let i = 0; i < data.length; i += CH) {
    const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
    if (a < 10) continue; // skip transparent

    if (isYellow(r, g, b)) {
      newData[i]   = TARGET_R;
      newData[i+1] = TARGET_G;
      newData[i+2] = TARGET_B;
      newData[i+3] = 255;
      changed++;
    }
  }

  await sharp(newData, { raw: { width, height, channels: CH } })
    .png()
    .toFile(fullPath);

  console.log(`  ✓ ${filename} — ${changed} pixels jaunes → #1E3A8A`);
}

// Rebuild transparent footer version from updated Blanc
async function makeTransparent(src, out) {
  const inputPath  = path.join(imgDir, src);
  const outputPath = path.join(imgDir, out);

  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const CH = 4;

  // bg = white (255,255,255)
  const newData = Buffer.from(data);
  const visited = new Uint8Array(width * height);
  const queue   = [];

  for (let x = 0; x < width;  x++) { queue.push([x,0]); queue.push([x,height-1]); }
  for (let y = 1; y < height-1; y++) { queue.push([0,y]); queue.push([width-1,y]); }

  const isBg = (r,g,b,a) => a < 10 || (r > 230 && g > 230 && b > 230);

  while (queue.length) {
    const [x,y] = queue.pop();
    if (x<0||x>=width||y<0||y>=height) continue;
    const flat = y*width+x;
    if (visited[flat]) continue;
    visited[flat] = 1;
    const i = flat*CH;
    if (isBg(data[i],data[i+1],data[i+2],data[i+3])) {
      newData[i]=0; newData[i+1]=0; newData[i+2]=0; newData[i+3]=0;
      queue.push([x+1,y],[x-1,y],[x,y+1],[x,y-1]);
    }
  }

  await sharp(newData, { raw:{width,height,channels:CH} }).png().toFile(outputPath);
  console.log(`  ✓ Transparent: ${out}`);
}

(async () => {
  console.log('— Unification couleurs icônes —');
  await unifyIconColors('Logo Yobante - Version 2 Blanc.png');
  await unifyIconColors('Logo Yobante Rek Blanc.png');
  await unifyIconColors('Logo Yobante Boutique Blanc.png');

  console.log('— Rebuild version transparente footer —');
  await makeTransparent(
    'Logo Yobante - Version 2 Blanc.png',
    'Logo Yobante - Version 2 Transparent.png'
  );

  console.log('\nTous les logos mis à jour.');
})();
