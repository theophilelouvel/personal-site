import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
import highlight from 'remark-highlight.js'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import codeTitle from 'remark-code-titles'
import capitalize from 'remark-capitalize'
import specialTitle from 'utils/specialTitle'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData() {

    const fileNames = fs.readdirSync(postsDirectory)

    const allPostsData = fileNames.map(fileName => {

        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postsDirectory, fileName)

        const source = fs.readFileSync(fullPath, 'utf8')

        const { content, data } = matter(source)

        return { id, data }
    })

    return allPostsData.sort((a, b) => {

        if (a.data.date < b.data.date) return 1

        return -1
    })
}

export async function getPostsPaths() {

    const postFilePaths = fs.readdirSync(postsDirectory)

    const paths = await postFilePaths
        .map((path) => path.replace(/\.md?$/, ''))
        .map((post) => ({ params: { post } }))

    return paths
}

export async function getPostById(id) {

    const postFilePath = path.join(postsDirectory, `${id}.md`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const processedContent = await unified()
        .use(markdown)
        .use(slug)
        .use(headings)
        .use(codeTitle)
        .use(highlight)
        .use(capitalize)
        .use(html)
        .process(content)

    const processedContentString = processedContent.toString()

    return {
        source: processedContentString,
        frontMatter: data,
        slug: id
    }
}

export async function getPostsForFeed() {

    const posts = await getSortedPostsData()

    const latestPosts = posts.slice(0, 6)

    const latestPostsWithContent = await Promise.all(latestPosts.map(async post => {
        const fullPost = await getPostById(post.id.replace(/\.md?$/, ''))

        return {
            slug: fullPost.slug,
            data: fullPost.frontMatter,
            content: fullPost.source
        }
    }))

    return latestPostsWithContent
}