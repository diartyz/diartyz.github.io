const options = {
  valueNames: ['title', { name: 'link', attr: 'href' }],
  item: `
    <div>
      <a class="title link"></a>
    </div>
  `.trim(),
}

const values = ['test'].map(title => ({
  title,
  link: `dist/${title}.html`,
}))

const blogList = new List('blog-list', options, values)
