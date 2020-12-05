import MetaHeader from 'components/Social/MetaHeader'

export default function Projects() {

    const pageMeta = {
        title: 'Théophile Louvel\'s Dashboard',
        slug: '/dashboard',
        description: 'Théophile Louvel\'s Metrics',
        locale: 'en_US',
        cover: {
            url: '/img/dashboard.png',
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