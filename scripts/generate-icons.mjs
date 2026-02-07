#!/usr/bin/env node
/**
 * Generate PWA icons from SVG favicon
 * Run with: node scripts/generate-icons.mjs
 */

import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

// Read the SVG file
const svgPath = path.join(publicDir, 'favicon.svg');
const svg = fs.readFileSync(svgPath, 'utf-8');

// Icon sizes to generate
const sizes = [
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

console.log('🎨 Generating PWA icons from favicon.svg...\n');

for (const { name, size } of sizes) {
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: size,
    },
  });

  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  const outputPath = path.join(publicDir, name);
  fs.writeFileSync(outputPath, pngBuffer);

  console.log(`✅ Generated ${name} (${size}x${size})`);
}

console.log('\n🎉 All PWA icons generated successfully!');
