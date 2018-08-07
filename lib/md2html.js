const path = require('path')
const fs = require('fs-extra')
const marked = require('marked')
const bluebird = require('bluebird')

bluebird.promisifyAll(fs)

const srcFolder = path.resolve(__dirname, '../src')
const distFolder = path.resolve(__dirname, '../dist')

function md2html(file) {
  fs
    .readFileAsync(file, 'utf8')
    .then(content =>
      fs.outputFileAsync(
        path
          .resolve(distFolder, path.relative(srcFolder, file))
          .replace(/md$/, 'html'),
        `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="../static/main.css">
            <title>${path.basename(file, '.md')}</title>
          </head>
          <body>
            ${marked(content)}
          </body>
          </html>
        `,
      ),
    )
}

function md2htmlR(dir) {
  fs
    .readdirAsync(dir)
    .then(files => files.map(file => path.resolve(dir, file)))
    .then(filePaths =>
      bluebird.Promise.all(
        filePaths.map(filePath => fs.lstatAsync(filePath)),
      ).then(stats =>
        stats.map((stat, index) => ({ filePath: filePaths[index], stat })),
      ),
    )
    .then(res => {
      res.forEach(item => {
        if (item.stat.isDirectory()) {
          md2htmlR(item.filePath)
        } else if (item.stat.isFile()) {
          md2html(item.filePath)
        } else {
          process.stdout.write('not a file or dir\n')
        }
      })
    })
}

fs.emptyDir(distFolder).then(res => md2htmlR(srcFolder))
