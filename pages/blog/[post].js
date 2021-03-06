import { getPostById, getPostsPaths } from 'lib/posts'
import MetaHeader from 'components/Social/MetaHeader'
import Post from 'components/Post'

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
		slug: `blog/${slug}`,
		description: frontMatter.description,
		content: "article",
		locale: "en_US",
		cover: {
			url: cover,
			alt: 'Théo Louvel'
		},
	}

	return <>
		<MetaHeader pageMeta={pageMeta} />
		<Post content={source} frontMatter={frontMatter} slug={slug} />
	</>
}

