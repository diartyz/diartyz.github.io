const options = {
  page: 9,
  pagination: {
    outerWindow: 1,
  },
  valueNames: ['title', { name: 'link', attr: 'href' }],
  item: `
    <h3>
      <a class="title link"></a>
    </h3>
  `.trim(),
}

const values = ['test'].map(title => ({
  title,
  link: `dist/${title}.html`,
}))

const blogList = new List('blog-list', options, values)
