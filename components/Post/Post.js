import CustomLink from 'components/CustomLink'
import PostSharing from 'components/Social/PostSharing'
import Image from 'next/image'

export default function Post({ content, frontMatter, slug }) {

    return <>

        <header className="mb-8 md:mb-10 lg:mb-12">
            {/* {frontMatter.cover &&
                <Image
                    src={`https://source.unsplash.com/${frontMatter.cover}/833x300`}
                    alt={frontMatter.description}
                    width={894}
                    height={300}
                />
            } */}
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

        <div className="flex mt-6 justify-end">
            <PostSharing slug={slug} title={frontMatter?.title} />
        </div>

        <nav className="flex justify-center my-16">
            <CustomLink href="/">← Home</CustomLink>
        </nav>

    </>
}