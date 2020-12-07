import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import components from 'components/mdxComponents'

const pagesDirectory = path.join(process.cwd(), 'mdx/pages')

export async function getPagesPaths() {

    const pageFilePaths = fs
        .readdirSync(pagesDirectory)
        .filter((path) => /\.mdx?$/.test(path))

    const paths = await pageFilePaths
        .map((path) => path.replace(/\.mdx?$/, ''))
        .map((page) => ({ params: { page } }))

    return paths
}

export async function getPageById(id) {

    const pageFilePath = path.join(pagesDirectory, `${id}.mdx`)
    const source = fs.readFileSync(pageFilePath)

    const { content, data } = matter(source)

    const mdxSource = await renderToString(content, { components, scope: data })

    return { source: mdxSource, frontMatter: data, slug: id }
}