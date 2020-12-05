import MetaHeader from 'components/Social/MetaHeader'

export default function Custom404() {

    const pageMeta = {
        title: 'You\'ve gone into a Wormhole',
        slug: '/404',
        description: 'Nothing to see here! Move along!',
        locale: 'en_US',
        cover: {
            url: '/img/404.svg',
            alt: '404 - Turn back',
        },
    }

    return <>
        <MetaHeader pageMeta={pageMeta} />
        <img className="max-h-96 md:max-h-full mx-auto mt-28 md:mt-18 lg:mt-14"
            src="/img/404.svg" alt="404" />
    </>
}