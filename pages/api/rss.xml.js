import { getPostsForFeed } from 'lib/posts'
import generateRSSFeed from 'utils/generateRSSFeed'
import { siteInfo } from 'utils/siteMetadata'

export default async function AtomFeed(req, res) {

    const latestPosts = await getPostsForFeed()

    const feed = await generateRSSFeed(siteInfo, latestPosts)

    try {
        res.status(200).setHeader("Content-Type", "text/xml; charset=utf-8");
        res.end(feed);
    } catch (err) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).json({ error: err })
        res.end()
    }
}