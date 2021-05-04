import Link from 'next/link'
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
		<header className="mb-8 md:mb-10 lg:mb-12 mt-5 md:mt-16">
			<h2 className="text-3xl lg:text-4xl text-amber-600 font-light mb-5 md:mb-10 mt-5 md:mt-16">Timeline</h2>
		</header>

		<p className="dark:text-bluegray-200 mb-5">Below are some of the milestones in my journey as a developer. Click the the card to view deployed projects 👇</p>

		<main>
			<Timeline milestones={milestones} />
		</main>

		<div className="flex justify-center my-16">
			<Link href="/"><a className="link-color">
				← Home
            </a></Link>
		</div>
	</>
}
