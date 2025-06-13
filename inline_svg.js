
const fs = require('fs')
const path = require('path')

const inputFile = process.argv[2]
const outputFile = process.argv[3]
const html = fs.readFileSync(inputFile, 'utf8')

const inlined = html.replace(/<!--\s*svg:(.*?)\s*-->/g, (_, filePath) => {
  const fullPath = path.resolve(path.dirname(inputFile), '..', filePath.trim())
  return fs.readFileSync(fullPath, 'utf8')
})

fs.writeFileSync(outputFile, inlined)
