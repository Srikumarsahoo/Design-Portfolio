// scripts/optimize-images.js
// Run with: node scripts/optimize-images.js

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const INPUT_DIR = './public/images'
const MAX_WIDTH = 1200  // No image needs to be wider than this
const QUALITY = 85

async function processDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true })

  for (const file of files) {
    const fullPath = path.join(dir, file.name)

    if (file.isDirectory()) {
      await processDirectory(fullPath)
      continue
    }

    const ext = path.extname(file.name).toLowerCase()
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue

    const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

    try {
      const metadata = await sharp(fullPath).metadata()
      const shouldResize = metadata.width > MAX_WIDTH

      await sharp(fullPath)
        .resize(shouldResize ? MAX_WIDTH : undefined, undefined, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath)

      const originalSize = fs.statSync(fullPath).size
      const newSize = fs.statSync(outputPath).size
      const saved = Math.round((1 - newSize / originalSize) * 100)

      console.log(`✓ ${file.name} → ${path.basename(outputPath)} (saved ${saved}%)`)
    } catch (err) {
      console.error(`✗ Failed: ${file.name}`, err.message)
    }
  }
}

processDirectory(INPUT_DIR).then(() => {
  console.log('\n✅ All images optimized!')
})