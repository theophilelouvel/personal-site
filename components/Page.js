import Link from 'next/link'

export default function Post({ content, frontMatter, slug }) {

    return <>

        <header className="mb-8 md:mb-10 lg:mb-12 mt-5 md:mt-16">
            <h1 className="big-title">{frontMatter.title}</h1>
        </header>

        <main className="markdown">{content}</main>

        <nav className="flex justify-center my-16">
            <Link href="/"><a className="link-color">
                ← Home
            </a></Link>
        </nav>

    </>
}