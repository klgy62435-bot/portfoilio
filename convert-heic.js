// Convert public/IMG_3718.HEIC to public/IMG_3718.jpg using heic-convert
// Run with: node convert-heic.js

import fs from 'fs/promises';
import path from 'path';
import heicConvert from 'heic-convert';

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const publicDir = path.resolve('public');
  const heicPath = path.join(publicDir, 'IMG_3718.HEIC');
  const jpgPath = path.join(publicDir, 'IMG_3718.jpg');

  console.log('🔍 Checking input file:', heicPath);
  if (!(await fileExists(heicPath))) {
    console.error('❌ HEIC file not found:', heicPath);
    process.exit(1);
  }

  try {
    const inputBuffer = await fs.readFile(heicPath);
    console.log('📥 Read HEIC file, size:', inputBuffer.length, 'bytes');

    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.92,
    });

    await fs.writeFile(jpgPath, outputBuffer);
    console.log('✅ Wrote JPG file:', jpgPath, 'size:', outputBuffer.length, 'bytes');
  } catch (err) {
    console.error('❌ Conversion failed:', err);
    process.exit(1);
  }
}

main();