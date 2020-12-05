import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const postsDirectory = path.join(process.cwd(), 'mdx/posts')

export const postFilePaths = fs
    .readdirSync(postsDirectory)
    .filter((path) => /\.mdx?$/.test(path))

export function getSortedPostsData() {

    const fileNames = fs
        .readdirSync(postsDirectory)
        // Only include md(x) files
        .filter((path) => /\.mdx?$/.test(path))

    const allPostsData = fileNames.map(fileName => {

        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const source = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(source)

        // Combine the data with the id, omitting the content
        return {
            id,
            data
        }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.data.date < b.data.date) {
            return 1
        } else {
            return -1
        }
    })
}
