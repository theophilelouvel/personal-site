import hydrate from 'next-mdx-remote/hydrate'

import { getPostById, getPostsPaths } from 'lib/posts'

import MetaHeader from 'components/Social/MetaHeader'
import Post from 'components/Post/Post'
import components from 'components/Post/mdxComponents'

export const getStaticPaths = async () => {

    const paths = await getPostsPaths()

    return {
        paths,
        // Switch to true when switching to an external .mdx source
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {

    const { source, frontMatter, slug } = await getPostById(params.post)

    return {
        props: {
            source,
            frontMatter,
            slug,
        },
        // Checks for changing within 30 minutes after each request
        revalidate: 1800
    }
}

export default function PostPage({ source, frontMatter, slug }) {

    const cover = frontMatter.cover ? `https://source.unsplash.com/${frontMatter.cover}/833x250` : '/img/post.png'

    const pageMeta = {
        title: frontMatter.title,
        date: frontMatter.date,
        updated: frontMatter.updated,
        slug,
        description: frontMatter.description,
        content: 'article',
        locale: 'en_US',
        cover: {
            url: cover,
            alt: 'Théophile Louvel'
        },
    }

    const content = hydrate(source, { components })

    return <>
        <MetaHeader pageMeta={pageMeta} />
        <Post content={content} frontMatter={frontMatter} slug={slug} />
    </>
}

