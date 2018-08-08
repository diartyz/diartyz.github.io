const path = require('path')
const fs = require('fs-extra')
const marked = require('marked')
const bluebird = require('bluebird')
const minify = require('html-minifier').minify
const _ = require('lodash')

bluebird.promisifyAll(fs)

const srcFolder = path.resolve(__dirname, '../src')
const distFolder = path.resolve(__dirname, '../dist')

function md2html(file, stat) {
  return fs
    .readFileAsync(file, 'utf8')
    .then(
      content =>
        `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href='https://fonts.googleapis.com/css?family=Bree+Serif'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/hybrid.min.css">
            <link rel="stylesheet" href="${path.relative(
              path.dirname(
                path.resolve(distFolder, path.relative(srcFolder, file)),
              ),
              path.resolve(srcFolder, '../static/main.css'),
            )}">
            <title>${path.basename(file, '.md')}</title>
          </head>
          <body>
            ${marked(content)}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
            <script>hljs.initHighlightingOnLoad();</script>
          </body>
          </html>
        `,
    )
    .then(content =>
      fs.outputFileAsync(
        path
          .resolve(distFolder, path.relative(srcFolder, file))
          .replace(/md$/, 'html'),
        minify(content, { collapseWhitespace: true }),
      ),
    )
    .then(res => ({
      title: path.basename(file, '.md'),
      tag: path.basename(path.dirname(file)),
      date: stat.mtime.getTime(),
      link: path.relative(srcFolder, file).replace(/md$/, 'html'),
    }))
}

function md2htmlR(dir) {
  return fs
    .readdirAsync(dir)
    .then(files => files.map(file => path.resolve(dir, file)))
    .then(filePaths =>
      bluebird.Promise.all(
        filePaths.map(filePath => fs.lstatAsync(filePath)),
      ).then(stats =>
        stats.map((stat, index) => ({ filePath: filePaths[index], stat })),
      ),
    )
    .then(res =>
      bluebird.Promise.all(
        res.map(item => {
          if (item.stat.isDirectory()) {
            return md2htmlR(item.filePath)
          } else if (item.stat.isFile()) {
            return md2html(item.filePath, item.stat)
          }
        }),
      ),
    )
}

fs
  .emptyDir(distFolder)
  .then(res => md2htmlR(srcFolder))
  .then(res =>
    fs.outputFileAsync(
      path.resolve(distFolder, 'articles.js'),
      'const articles = ' + JSON.stringify(_.flatMapDeep(res)),
    ),
  )
