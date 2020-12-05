import MetaHeader from 'components/Social/MetaHeader'

export default function About() {

    const pageMeta = {
        title: 'Théophile Louvel\'s Projects',
        slug: '/projects',
        description: 'A non-exhaustive list of projects I took part in',
        locale: 'en_US',
        cover: {
            url: '/img/projects.png',
            alt: 'Théophile Louvel\'s Projects',
        },
    }

    return <>
        <MetaHeader pageMeta={pageMeta} />
        <h1 className="big-title">
            Coming soon!
        </h1>
    </>
}
