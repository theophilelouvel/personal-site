
// import hydrate from 'next-mdx-remote/hydrate'

// import { getPageById, getPostsPaths } from 'lib/posts'

import MetaHeader from 'components/Social/MetaHeader'

export default function About() {

    const pageMeta = {
        title: 'About Théophile Louvel',
        slug: '/about',
        description: 'Théophile Louvel is a Full Stack Engineer and Web Developer',
        locale: 'en_US',
        cover: {
            url: '/img/about.png',
            alt: 'About Théophile Louvel\'s',
        },
    }

    return <>
        <MetaHeader pageMeta={pageMeta} />
        <h1 className="big-title">
            Coming soon!
        </h1>
    </>
}