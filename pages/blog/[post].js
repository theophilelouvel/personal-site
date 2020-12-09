import { getPostById, getPostsPaths } from 'lib/posts'

import Layout from 'components/Layout'
import MetaHeader from 'components/Social/MetaHeader'
import Post from 'components/Post/Post'

export const getStaticPaths = async () => {

    const paths = await getPostsPaths()

    return {
        paths,
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
        // revalidate: 3600
    }
}

export default function PostPage({ source, frontMatter, slug }) {

    const cover = frontMatter.cover ? `https://source.unsplash.com/${frontMatter.cover}/1200x630` : '/img/hero.png'

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

    return <>
        <Layout>
            <MetaHeader pageMeta={pageMeta} />
            <Post content={source} frontMatter={frontMatter} slug={slug} />
        </Layout>
    </>
}

