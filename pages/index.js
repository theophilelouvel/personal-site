import Link from 'next/link'
import { getSortedPostsData } from 'lib/posts'

export function getStaticProps() {

    const posts = getSortedPostsData()

    return { props: { posts } }
}

export default function Index({ posts }) {
    return <>
        <h1 className="big-title mb-5 md:mb-10">All Posts</h1>

        <ul>
            {posts.map((post) => (
                <li key={post.id} className="mb-5">
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
                </li>
            ))}
        </ul>
    </>
}

