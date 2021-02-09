import Layout from 'components/Layout'
import MetaHeader from 'components/Social/MetaHeader'

export default function Custom404() {

    const pageMeta = {
        title: 'You\'ve come to the wrong place',
        slug: '/404',
        description: 'Move along already!',
        locale: 'en_US',
        cover: {
            url: '/img/404.svg',
            alt: '404 - Turn back',
        },
    }

    return <>
        <MetaHeader pageMeta={pageMeta} />
        <Layout>
            <img className="max-h-96 md:max-h-full mx-auto mt-28 md:mt-18 lg:mt-14"
                src="/img/404.svg" alt="404" />
        </Layout>
    </>
}