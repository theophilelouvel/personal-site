import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import components from 'components/mdxComponents'

const pagesDirectory = path.join(process.cwd(), 'mdxPages')

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

export async function getPagesData() {

    const fileNames = fs
        .readdirSync(pagesDirectory)
        .filter((path) => /\.mdx?$/.test(path))

    const allPagesData = fileNames.map(fileName => {

        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(pagesDirectory, fileName)
        const source = fs.readFileSync(fullPath, 'utf8')

        const { content, data } = matter(source)

        return { id, data }
    })

    return allPagesData
}


