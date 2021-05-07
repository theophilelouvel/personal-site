import Link from 'next/link'
import PostSharing from 'components/Social/PostSharing'
import title from 'title'
import specialTitle from 'utils/specialTitle'
import { format, parse } from "date-fns"

export default function Post({ content, frontMatter, slug }) {

	return <>
		<header className="mb-8 md:mb-10 lg:mb-12 md:mt-9">
			{frontMatter.date &&
				<time dateTime={frontMatter.date} className="mt-5 lg:mb-1 px-2.5 py-0.5 rounded text-xs font-medium bg-bluegray-100 text-gray-900 dark:bg-bluegray-700 dark:text-bluegray-200">
					{format(parse(frontMatter.date, "yyyy-MM-dd", new Date()), "MMM do, yyyy")}
				</time>
			}
			<h2 className="big-title dark:text-amber-600">{title(frontMatter.title, { special: specialTitle })}</h2>
			{frontMatter.description && (
				<p className="italic font-light text-lg dark:text-bluegray-200">{frontMatter.description}</p>
			)}
		</header>

		<article className="markdown" dangerouslySetInnerHTML={{ __html: content }} />

		<div className="flex mt-10 justify-end">
			<PostSharing slug={slug} title={frontMatter?.title} />
		</div>

		<div className="flex justify-center my-16">
			<Link href="/"><a className="link-color">← Home</a></Link>
		</div>

	</>
}