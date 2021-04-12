import Link from 'next/link'
import Layout from 'components/Layout'
import MetaHeader from 'components/Social/MetaHeader'
import { getSortedPostsData } from 'lib/posts'
import title from 'title'
import specialTitle from 'utils/specialTitle'
import { siteInfo } from 'utils/siteMetadata'

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

    const pageMeta = {
        title: siteInfo.title,
        updated: posts[0].data.updated,
        slug: "",
        description: siteInfo.description,
        content: "website",
        locale: "en_US",
        cover: {
            url: "https://source.unsplash.com/OhJmwB4XWLE/1200x630",
            alt: "Théo Louvel\'s Blog"
        },
    }

    return <>
        <MetaHeader pageMeta={pageMeta} />
        <Layout>
            <h1 className="big-title mb-5 md:mb-10 mt-5 md:mt-16">All Posts</h1>

            {posts.map((post) => (
                <div key={post.id} className="mb-5">
                    {post.data.date &&
                        <div>
                            <time className="px-2.5 py-0.5 rounded text-xs font-medium bg-bluegray-100 text-gray-900 dark:bg-bluegray-700 dark:text-bluegray-200">
                                {post.data.date}
                            </time>
                        </div>}
                    <Link
                        as={`/blog/${post.id.replace(/\.mdx?$/, '')}`}
                        href={`/blog/[post]`}
                        className=""
                    >
                        <a className="medium-title hover:text-amber-600">
                            {title(post.data.title, { special: specialTitle })}
                        </a>
                    </Link>
                    {post.data.description &&
                        <p className="italic font-light dark:text-bluegray-300">{post.data.description}</p>
                    }
                </div>
            ))}
        </Layout>
    </>
}

