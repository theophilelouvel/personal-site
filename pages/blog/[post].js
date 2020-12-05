import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'


import { postsDirectory, postFilePaths } from 'lib/posts'

import MetaHeader from 'components/Social/MetaHeader'
import Post from 'components/Post/Post'
import components from 'components/Post/mdxComponents'

export const getStaticPaths = async () => {

    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((post) => ({ params: { post } }))

    return {
        paths,
        // Switch to true when switching to an external .mdx source
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(postsDirectory, `${params.post}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await renderToString(content, {
        components,
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
            slug: params.post,
        },
        // Checks for changing within 30 minutes after each request
        revalidate: 1800
    }
}

export default function PostPage({ source, frontMatter, slug }) {

    const pageMeta = {
        title: frontMatter.title,
        date: frontMatter.date,
        updated: frontMatter.updated,
        slug,
        description: frontMatter.description,
        content: 'article',
        locale: 'en_US',
        cover: {
            url: '/img/post.png',
            alt: 'Théophile Louvel'
        },
    }

    const content = hydrate(source, { components })
    return <>
        <MetaHeader pageMeta={pageMeta} />
        <Post content={content} frontMatter={frontMatter} slug={slug} />
    </>
}

