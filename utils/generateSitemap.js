export default function generateSitemap(siteURL, pages) {

    const today = new Date().toISOString().split('T')[0]

    const getURL = (id) => siteURL + '/' + id

    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => {
        return `<url>
                <loc>${getURL(page.id.replace(/\.mdx?$/, ''))}</loc>
                </url>`
    }).join('')}
  </urlset>`
    //     return `<?xml version="1.0" encoding="UTF-8"?>
    //   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    //   ${pages.map(page => {
    //         return `<url>
    //                 <loc>${getURL(page.id.replace(/\.mdx?$/, ''))}</loc>
    //                 <lastmod>${page.data != undefined ? page.data.updated : today}</lastmod>
    //                 </url>`
    //     }).join('')}
    //   </urlset>`
}