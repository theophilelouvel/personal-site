import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import components from 'components/mdxComponents'
import highlight from 'rehype-highlight'

const postsDirectory = path.join(process.cwd(), 'mdx/posts')

export async function getSortedPostsData() {

    const fileNames = fs
        .readdirSync(postsDirectory)
        .filter((path) => /\.mdx?$/.test(path))

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

    const postFilePaths = fs
        .readdirSync(postsDirectory)
        .filter((path) => /\.mdx?$/.test(path))

    const paths = await postFilePaths
        .map((path) => path.replace(/\.mdx?$/, ''))
        .map((post) => ({ params: { post } }))

    return paths
}

export async function getPostById(id) {

    const postFilePath = path.join(postsDirectory, `${id}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await renderToString(content, {
        components,
        mdxOptions: {
            // remarkPlugins: [],
            rehypePlugins: [highlight],
        },
        scope: data
    })

    return { source: mdxSource, frontMatter: data, slug: id }
}

export async function getPostsForFeed() {

    const posts = await getSortedPostsData()

    const latestPosts = posts.slice(0, 6)

    const latestPostsWithContent = await Promise.all(latestPosts.map(async post => {
        const fullPost = await getPostById(post.id.replace(/\.mdx?$/, ''))

        return {
            slug: fullPost.slug,
            data: fullPost.frontMatter,
            content: fullPost.source.renderedOutput
        }
    }))

    return latestPostsWithContent
}