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

// export function getAllPostIds() {

//     const fileNames = fs.readdirSync(postsDirectory)

//     return fileNames.map(fileName => {
//         return {
//             params: {
//                 id: fileName.replace(/\.md$/, '')
//             }
//         }
//     })
// }

// export async function getPostById(id) {
//     const fullPath = path.join(postsDirectory, `${id}.md`)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)

//     // Use remark to convert markdown into HTML string
//     const processedContent = await remark()
//         .use(html)
//         .process(matterResult.content)
//     const contentHtml = processedContent.toString()

//     // Combine the data with the id and contentHtml
//     return {
//         id,
//         contentHtml,
//         ...matterResult.data
//     }
// }

// const blogFields = `
//  'id': _id,
//   title,
//   'slug': slug.current,
//   cover,
//   'date': publishedAt,
//   'updated': _updatedAt,
//   description,
//   content[]{..., "asset": asset->}`

// export async function getAllPosts() {
//     const query = `*[_type == "post"] | order(publishedAt desc) {
//     ${blogFields}
//   }[0...5]`

//     const posts = await sanity.fetch(query)

//     return posts
// }

// // Post page
// export async function getPostsSlugsForPaths() {
//     const query = `*[_type == "post"]{'slug': slug.current}`
//     const postsSlugs = await sanity.fetch(query)
//     const paths = postsSlugs?.map(el => ({
//         params: { post: el.slug }
//     }))
//     return paths
// }

// export async function getPostBySlug(slug) {
//     const postData = await sanity.fetch(`*[_type == "post" && slug.current == $slug]{
//     ${blogFields}
//   }`, { slug }).then(res => res?.[0])

//     return postData
// }

// // Feeds
// export async function getPostsSlugsAndDateForSitemap() {
//     const query = `*[_type == "post"]{'slug': slug.current, 'date': _updatedAt}`
//     const postsSlugsAndISODate = await sanity.fetch(query)
//     return postsSlugsAndISODate
// }

// export async function getPostsForAtomFeed() {
//     const query = `*[_type == "post"] | order(publishedAt desc) {
//     'id': _id,
//     title,
//     description,
//     'slug': slug.current,
//     'published': publishedAt,
//     'updated': _updatedAt
//   }[0...10]`
//     const postsForAtomFeed = await sanity.fetch(query)
//     return postsForAtomFeed
// }