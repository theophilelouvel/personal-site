import CustomLink from 'components/CustomLink'

export default function Post({ content, frontMatter, slug }) {

    return <>

        <header className="mb-8 md:mb-10 lg:mb-12 mt-5 md:mt-16">
            {frontMatter.date &&
                <div className="mt-5 lg:mb-1">
                    <time className="px-2.5 py-0.5 rounded text-xs font-medium bg-bluegray-100 text-gray-900">
                        {frontMatter.date}
                    </time>
                </div>
            }
            <h1 className="big-title">{frontMatter.title}</h1>
            {frontMatter.description && (
                <p className="italic font-light text-lg">{frontMatter.description}</p>
            )}
        </header>

        <article>{content}</article>

        <nav className="flex justify-center my-16">
            <CustomLink href="/">← Home</CustomLink>
        </nav>

    </>
}