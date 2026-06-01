/**
 * Applique l'effet "fond blanc + contour jaune" sur les lettres O, B et A
 * du texte YOBANTE dans les logos Blanc.
 *
 * Algorithme :
 * 1. Détection des pixels de la couleur principale du texte (bleu foncé ou jaune)
 * 2. Profil de densité par colonne → segmentation automatique des lettres
 * 3. Transform de distance BFS sur chaque lettre cible
 * 4. Interior (distance > BORDER_W) → blanc
 *    Bord     (distance ≤ BORDER_W) → contour coloré
 */

const sharp = require('sharp');
const path  = require('path');
const imgDir = path.join(__dirname, 'src/assets/images');

// ── Paramètres ──────────────────────────────────────────────────────────────
const BORDER_W    = 14;   // épaisseur du contour en pixels (image 3000×3000)
const OUTLINE_R   = 30;   // contour couleur : bleu marine #1E3A8A
const OUTLINE_G   = 58;
const OUTLINE_B   = 138;

// Détecteur de la couleur principale du logo (texte)
function isLogoColor(r, g, b, a, isDarkLogo) {
  if (a < 80) return false;
  if (isDarkLogo) {
    // texte bleu marine
    return r < 90 && g < 120 && b > 80;
  } else {
    // texte jaune (logo Boutique)
    return r > 180 && g > 140 && b < 100;
  }
}

// BFS distance transform : distance de chaque pixel coloré au bord non-coloré
function bfsDistance(mask, width, height) {
  const dist = new Int16Array(width * height).fill(-1);
  const queue = [];

  // Initialiser : pixels colorés adjacents à un non-coloré ont dist=1
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (!mask[idx]) continue;
      // Vérifier si un voisin est non-coloré
      const neighbors = [
        [x-1,y],[x+1,y],[x,y-1],[x,y+1]
      ];
      for (const [nx,ny] of neighbors) {
        if (nx < 0 || nx >= width || ny < 0 || ny >= height || !mask[ny*width+nx]) {
          dist[idx] = 1;
          queue.push(idx);
          break;
        }
      }
    }
  }

  let head = 0;
  while (head < queue.length) {
    const idx = queue[head++];
    const x = idx % width;
    const y = Math.floor(idx / width);
    const d = dist[idx];

    for (const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
      const nx = x+dx, ny = y+dy;
      if (nx<0||nx>=width||ny<0||ny>=height) continue;
      const nidx = ny*width+nx;
      if (mask[nidx] && dist[nidx] === -1) {
        dist[nidx] = d + 1;
        queue.push(nidx);
      }
    }
  }
  return dist;
}

async function processLogo(srcFile, outFile) {
  const inputPath  = path.join(imgDir, srcFile);
  const outputPath = path.join(imgDir, outFile);

  const { data, info } = await sharp(inputPath)
    .ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const CH = 4;

  // ── Détecter si logo "sombre" (bleu sur blanc) ou "clair" (jaune sur blanc) ──
  // Compter pixels bleus vs jaunes
  let blueCount = 0, yellowCount = 0;
  for (let i = 0; i < data.length; i += CH) {
    const [r,g,b,a] = [data[i],data[i+1],data[i+2],data[i+3]];
    if (a < 80) continue;
    if (r<90 && g<120 && b>80)       blueCount++;
    else if (r>180 && g>140 && b<100) yellowCount++;
  }
  const isDarkLogo = blueCount > yellowCount;
  const mainColor = isDarkLogo ? 'bleu' : 'jaune';
  console.log(`  ${srcFile} → texte ${mainColor} (bleu:${blueCount}, jaune:${yellowCount})`);

  // ── Trouver la bounding box du texte ──
  let minX=width, maxX=0, minY=height, maxY=0;
  for (let y=0; y<height; y++) for (let x=0; x<width; x++) {
    const i=(y*width+x)*CH;
    if (isLogoColor(data[i],data[i+1],data[i+2],data[i+3],isDarkLogo)) {
      if(x<minX)minX=x; if(x>maxX)maxX=x;
      if(y<minY)minY=y; if(y>maxY)maxY=y;
    }
  }
  console.log(`  BBox: x=[${minX}-${maxX}] y=[${minY}-${maxY}]`);

  // ── Profil de densité (texte = portion basse du bbox) ──
  const textH = maxY - minY;
  const textStartY = maxY - Math.round(textH * 0.45);
  const step = Math.max(1, Math.floor((maxX - minX) / 120));
  const colDensity = [];
  for (let x = minX; x <= maxX; x += step) {
    let cnt = 0;
    for (let y = textStartY; y <= maxY; y++) {
      const i = (y*width+x)*CH;
      if (isLogoColor(data[i],data[i+1],data[i+2],data[i+3],isDarkLogo)) cnt++;
    }
    colDensity.push({ x, cnt });
  }

  // ── Trouver les segments de lettres (groupes de colonnes denses) ──
  const DENSITY_THRESH = Math.max(...colDensity.map(d=>d.cnt)) * 0.15;
  const segments = [];
  let inSeg = false, segStart = 0;
  for (let i = 0; i < colDensity.length; i++) {
    const dense = colDensity[i].cnt > DENSITY_THRESH;
    if (dense && !inSeg)  { inSeg=true; segStart=colDensity[i].x; }
    if (!dense && inSeg)  { inSeg=false; segments.push([segStart, colDensity[i-1].x]); }
  }
  if (inSeg) segments.push([segStart, colDensity[colDensity.length-1].x]);

  console.log(`  Segments trouvés: ${segments.length} →`, segments.map(s=>s.join('-')).join(', '));

  // ── Identifier O(2), B(3), A(4) dans YOBANTE (7 lettres) ──
  // Le premier segment peut contenir l'icône fusionnée avec Y
  // On compte les segments : si ≥7, positions 1,2,3 = O,B,A
  // Si l'icône + Y forment 1 segment, positions 1,2,3 = O,B,A aussi
  // En général les lettres O,B,A sont les segments 1,2,3 (0-indexed)
  if (segments.length < 4) {
    console.warn('  ⚠ Pas assez de segments détectés, skip');
    return;
  }

  // L'icône est souvent fusionnée avec Y → le segment 0 est "icône+Y"
  // O=seg1, B=seg2, A=seg3
  const targetSegs = [segments[1], segments[2], segments[3]];
  const labels = ['O','B','A'];
  console.log(`  Lettres cibles:`, labels.map((l,i)=>`${l}=[${targetSegs[i].join('-')}]`).join(', '));

  // ── Appliquer l'effet sur chaque lettre ──
  const newData = Buffer.from(data);
  const PAD = 60; // padding vertical pour capturer les anti-aliasing

  for (let li = 0; li < targetSegs.length; li++) {
    const [lx0, lx1] = targetSegs[li];
    const lx0p = Math.max(0, lx0 - PAD);
    const lx1p = Math.min(width-1, lx1 + PAD);
    const ly0p = Math.max(0, minY - PAD);
    const ly1p = Math.min(height-1, maxY + PAD);

    const rw = lx1p - lx0p + 1;
    const rh = ly1p - ly0p + 1;

    // Créer le masque local
    const mask = new Uint8Array(rw * rh);
    for (let ry = 0; ry < rh; ry++) {
      for (let rx = 0; rx < rw; rx++) {
        const gx = lx0p + rx, gy = ly0p + ry;
        const i = (gy * width + gx) * CH;
        if (isLogoColor(data[i],data[i+1],data[i+2],data[i+3],isDarkLogo)) {
          mask[ry * rw + rx] = 1;
        }
      }
    }

    // Distance transform BFS
    const dist = bfsDistance(mask, rw, rh);

    // Appliquer les couleurs
    for (let ry = 0; ry < rh; ry++) {
      for (let rx = 0; rx < rw; rx++) {
        const midx = ry * rw + rx;
        if (!mask[midx]) continue;

        const gx = lx0p + rx, gy = ly0p + ry;
        const gi = (gy * width + gx) * CH;
        const d = dist[midx];

        if (d < 0) continue; // ne devrait pas arriver

        if (d > BORDER_W) {
          // Intérieur → blanc
          newData[gi]   = 255;
          newData[gi+1] = 255;
          newData[gi+2] = 255;
          newData[gi+3] = 255;
        } else {
          // Contour → jaune #F5C518
          const ratio = d / BORDER_W; // 0→1 fade du bord vers l'intérieur
          // Anti-aliasing : transition douce au bord externe (d=1)
          const alpha = d <= 2 ? 180 + Math.round(75 * (d/2)) : 255;
          newData[gi]   = OUTLINE_R;
          newData[gi+1] = OUTLINE_G;
          newData[gi+2] = OUTLINE_B;
          newData[gi+3] = alpha;
        }
      }
    }
    let dmax = 0; for (let k=0; k<dist.length; k++) if(dist[k]>dmax) dmax=dist[k];
    console.log(`  ✓ Lettre ${labels[li]} traitée (dist max ~${dmax})`);
  }

  await sharp(newData, { raw:{ width, height, channels: CH } })
    .png()
    .toFile(outputPath);
  console.log(`  ✓ Sauvegardé : ${outFile}\n`);
}

// Rebuild transparent footer
async function toTransparent(srcFile, outFile) {
  const inputPath  = path.join(imgDir, srcFile);
  const outputPath = path.join(imgDir, outFile);
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const CH = 4;
  const newData = Buffer.from(data);
  const visited = new Uint8Array(width * height);
  const queue = [];
  const isBg = (r,g,b,a) => a<20 || (r>245 && g>245 && b>245);
  for (let x=0;x<width;x++){queue.push([x,0]);queue.push([x,height-1]);}
  for (let y=1;y<height-1;y++){queue.push([0,y]);queue.push([width-1,y]);}
  while(queue.length){
    const [x,y]=queue.pop();
    if(x<0||x>=width||y<0||y>=height)continue;
    const flat=y*width+x; if(visited[flat])continue; visited[flat]=1;
    const i=flat*CH;
    if(isBg(data[i],data[i+1],data[i+2],data[i+3])){
      newData[i]=0;newData[i+1]=0;newData[i+2]=0;newData[i+3]=0;
      queue.push([x+1,y],[x-1,y],[x,y+1],[x,y-1]);
    }
  }
  await sharp(newData,{raw:{width,height,channels:CH}}).png().toFile(outputPath);
  console.log(`  ✓ Transparent footer : ${outFile}`);
}

(async () => {
  console.log('\n── Effet OBA sur les logos ──\n');
  await processLogo('Logo Yobante - Version 2 Blanc.png', 'Logo Yobante - Version 2 Blanc.png');
  await processLogo('Logo Yobante Rek Blanc.png',         'Logo Yobante Rek Blanc.png');
  await processLogo('Logo Yobante Boutique Blanc.png',    'Logo Yobante Boutique Blanc.png');
  console.log('── Rebuild footer transparent ──');
  await toTransparent('Logo Yobante - Version 2 Blanc.png', 'Logo Yobante - Version 2 Transparent.png');
  console.log('\nFini.');
})();
