import Link from 'next/link'
import PostSharing from 'components/Social/PostSharing'
import title from 'title'
import specialTitle from 'utils/specialTitle'

export default function Post({ content, frontMatter, slug }) {

    return <>

        <header className="mb-8 md:mb-10 lg:mb-12 md:mt-9">
            {frontMatter.date &&
                <time className="mt-5 lg:mb-1 px-2.5 py-0.5 rounded text-xs font-medium bg-bluegray-100 text-gray-900">
                    {frontMatter.date}
                </time>
            }
            <h1 className="big-title">{title(frontMatter.title, { special: specialTitle })}</h1>
            {frontMatter.description && (
                <p className="italic font-light text-lg">{frontMatter.description}</p>
            )}
        </header>

        <article className="markdown" dangerouslySetInnerHTML={{ __html: content }} />

        <div className="flex mt-10 justify-end">
            <PostSharing slug={slug} title={frontMatter?.title} />
        </div>

        <nav className="flex justify-center my-16">
            <Link href="/"><a className="link-color">← Home</a></Link>
        </nav>

    </>
}