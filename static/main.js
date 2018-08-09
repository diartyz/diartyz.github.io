const options = {
  page: 9,
  pagination: { outerWindow: 1 },
  valueNames: ['title', 'date', 'tag', { name: 'link', attr: 'href' }],
  item: `
    <h3>
      <a class="title link" target="_blank"></a>
      <span class="date"></span>
      <span class="tag"></span>
    </h3>
  `.trim(),
}

articles.forEach(article => {
  article.link = 'dist/' + article.link
  article.date = window.dateFns.format(article.mtime, 'MMMM DD,YYYY')
})

const blogList = new List('blog-list', options, articles)

blogList.sort('mtime', { order: 'desc' })
