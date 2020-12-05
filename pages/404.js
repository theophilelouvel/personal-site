// import { getAllPosts } from 'lib/posts'

import MetaHeader from 'components/Social/MetaHeader'
import { siteInfo } from 'utils/siteMetadata'

export default function Custom404() {
    const pageMeta = {
        // The title of the page in the tab
        title: '404',
        path: '404',
        cover: {
            url: '/img/cover-404.png',
            alt: `${siteInfo.title} - 404`
        },
        description: siteInfo.description
    }

    return <>
        <MetaHeader pageMeta={pageMeta} />
        <img className="max-h-96 md:max-h-full mx-auto mt-28 md:mt-18 lg:mt-14"
            src="/img/404.svg" alt="404" />
    </>
}