import PostLink from 'components/Post/PostLink'
import PostSharing from 'components/Social/PostSharing'

export default function Post({ content, frontMatter, slug }) {

    return <>

        <header className="mb-8 md:mb-10 lg:mb-12">
            {frontMatter.date &&
                <div className="lg:mb-1">
                    <time className="px-2.5 py-0.5 rounded text-xs font-medium bg-bluegray-100 text-gray-900">
                        {frontMatter.date}
                    </time>
                </div>}
            <h1 className="big-title">{frontMatter.title}</h1>
            {frontMatter.description && (
                <p className="italic font-light text-lg">{frontMatter.description}</p>
            )}
        </header>

        <article>{content}</article>

        <div className="flex mt-6 justify-end">
            <PostSharing slug={slug} title={frontMatter?.title} />
        </div>

        <nav className="flex justify-center my-16">
            <PostLink href="/">← Home</PostLink>
        </nav>

    </>
}