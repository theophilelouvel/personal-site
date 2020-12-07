export default function generateSitemap(siteURL, pagesSlugs, postsSlugsWithDate) {

    const today = new Date().toISOString().split('T')[0]

    const getURL = (id) => siteURL + '/' + id

    const pagesMap = pagesSlugs.map(slug => {
        return `<url>
      <loc>${getURL(slug)}</loc>
      <lastmod>${today}</lastmod>
  </url>`
    }).join('')

    const postsMap = postsSlugsWithDate.map(post => {
        return `<url>
    <loc>${getURL(post.id.replace(/\.mdx?$/, ''))}</loc>
    <lastmod>${post.data.updated}</lastmod>
  </url>`
    }).join('')

    const maps = pagesMap + postsMap

    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${maps}
  </urlset>`
}