import { getSortedPostsData } from 'lib/posts'
import { getPagesData } from 'lib/pages'
import generateSitemap from 'utils/generateSitemap'
import { siteInfo } from 'utils/siteMetadata'

export default async function Sitemap(req, res) {

    // The empty string stands for the homepage, since the / will get concatenated on later
    const staticPages = [
        { id: '' },
    ]

    const postPages = await getSortedPostsData()
    const dynamicPages = await getPagesData()

    const pages = staticPages.concat(dynamicPages).concat(postPages)

    try {
        res.status(200).setHeader('Content-Type', 'text/xml')
        res.end(generateSitemap(siteInfo.url, pages))
    } catch (err) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).json({ error: err })
        res.end()
    }
}
