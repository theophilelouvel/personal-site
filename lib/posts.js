import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import components from 'components/Post/mdxComponents'

export const postsDirectory = path.join(process.cwd(), 'mdx/posts')

export async function getSortedPostsData() {

    const fileNames = fs
        .readdirSync(postsDirectory)
        .filter((path) => /\.mdx?$/.test(path))

    const allPostsData = fileNames.map(fileName => {

        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const source = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(source)

        // Combine the data with the id, omitting the content
        return { id, data }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        a.data.date < b.data.date ? 1 : -1
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

    const mdxSource = await renderToString(content, { components, scope: data })

    return { source: mdxSource, frontMatter: data, slug: id }
}