import hydrate from 'next-mdx-remote/hydrate'

import { getPageById, getPagesPaths } from 'lib/pages'

import Layout from 'components/Layout'
import MetaHeader from 'components/Social/MetaHeader'
import Page from 'Components/Page'
import components from 'components/mdxComponents'

export const getStaticPaths = async () => {

    const paths = await getPagesPaths()

    return {
        paths,
        // Switch to true when switching to an external .mdx source
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {

    const { source, frontMatter, slug } = await getPageById(params.page)

    return {
        props: {
            source,
            frontMatter,
            slug,
        },
        // revalidate: 1800
    }
}

export default function PagePage({ source, frontMatter, slug }) {

    const cover = frontMatter.cover ? `https://source.unsplash.com/${frontMatter.cover}/1200x630` : '/img/hero.png'

    const pageMeta = {
        title: frontMatter.title,
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
        <Layout>
            <MetaHeader pageMeta={pageMeta} />
            <Page content={content} frontMatter={frontMatter} slug={slug} />
        </Layout>
    </>
}