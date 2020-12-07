import { getSortedPostsData } from 'lib/posts'
import generateSitemap from 'utils/generateSitemap'
import { siteInfo } from 'utils/siteMetadata'

export default async function Sitemap(req, res) {
    // The empty string stands for the homepage, since the / will get concatenated on later
    const pagesSlugs = ['', 'about']
    const postsSlugsWithDate = await getSortedPostsData()

    try {
        res.status(200).setHeader('Content-Type', 'text/xml')
        res.end(generateSitemap(siteInfo.url, pagesSlugs, postsSlugsWithDate))
    } catch (err) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).json({ error: err })
        res.end()
    }
}

