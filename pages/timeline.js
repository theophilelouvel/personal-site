// import Link from 'next/link'
import Layout from 'components/Layout'
import MetaHeader from 'components/Social/MetaHeader'
import { siteInfo } from 'utils/siteMetadata'
import Timeline from 'components/Timeline'
import { milestones } from 'utils/milestones'
// import TechCards from 'components/TechCards'

export default function TimelinePage() {
    const pageMeta = {
        title: "Timelime - Théo Louvel",
        slug: "/timeline",
        description: siteInfo.description,
        content: "website",
        locale: "en_US",
        cover: {
            url: "https://source.unsplash.com/pIY6sz-texg/1200x630",
            alt: "Théo Louvel's timeline",
        },
    }

    return <>
        <MetaHeader pageMeta={pageMeta} />

        <Layout>

            <header className="mb-8 md:mb-10 lg:mb-12 mt-5 md:mt-16">
                <h2 className="text-3xl lg:text-4xl text-amber-600 font-light mb-5 md:mb-10 mt-5 md:mt-16">Timeline</h2>
            </header>

            <main>
                <Timeline milestones={milestones} />
            </main>

        </Layout>
    </>
}
