import Link from 'next/link'
import Image from 'next/image'
import MetaHeader from 'components/Social/MetaHeader'
import { getSortedPostsData } from 'lib/posts'

export async function getStaticProps() {

    const posts = await getSortedPostsData()

    return {
        props: {
            posts
        },
        revalidate: 3600
    }
}

export default function Index({ posts }) {

    const cover = 'OhJmwB4XWLE'
    const alt = 'Théophile Louvel\'s Blog'

    const pageMeta = {
        title: 'Théophile Louvel\'s Blog',
        updated: posts[0].data.updated,
        slug: '',
        description: 'JavaScript, TypeScript, React, Next.js, Tailwind, Rust & Co',
        locale: 'en_US',
        cover: {
            cover: cover ? cover : `/img/hero.png`,
            alt
        },
    }

    return <>
        <MetaHeader pageMeta={pageMeta} />
        {/* <Image
            src={`https://source.unsplash.com/${cover}/833x300`}
            alt={alt}
            width={833}
            height={300}
        /> */}

        <h1 className="big-title mb-5 md:mb-10 mt-5 md:mt-16">All Posts</h1>

        {posts.map((post) => (
            <div key={post.id} className="mb-5">
                {post.data.date &&
                    <div>
                        <time className="px-2.5 py-0.5 rounded text-xs font-medium bg-bluegray-100 text-gray-900">
                            {post.data.date}
                        </time>
                    </div>}
                <Link
                    as={`/blog/${post.id.replace(/\.mdx?$/, '')}`}
                    href={`/blog/[post]`}
                >
                    <a className="medium-title mb-2">
                        {post.data.title}
                    </a>
                </Link>
                {post.data.description &&
                    <p className="italic font-light">{post.data.description}</p>
                }
            </div>
        ))}
    </>
}

