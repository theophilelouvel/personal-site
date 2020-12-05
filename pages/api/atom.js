import { getPostsForAtomFeed } from 'lib/posts'
import generateAtomFeed from 'utils/generateAtomFeed'

export default async function AtomFeed(req, res) {

    const latestPosts = await getPostsForAtomFeed()

    const feed = await generateAtomFeed(latestPosts)

    try {
        res.status(200).setHeader("Content-Type", "text/xml; charset=utf-8");
        res.end(feed);
    } catch (err) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).json({ error: err })
        res.end()
    }
}