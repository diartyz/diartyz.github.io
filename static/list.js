const options = {
  page: 9,
  pagination: { outerWindow: 1 },
  valueNames: ['title', { name: 'link', attr: 'href' }],
  item: `
    <h3>
      <a class="title link" target="_blank"></a>
    </h3>
  `.trim(),
}

const values = articles.map(article => ({
  title: article.name,
  link: `dist/${article.link}`,
}))

const blogList = new List('blog-list', options, values)
