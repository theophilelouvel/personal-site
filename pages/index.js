import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'
import { getAllPosts } from 'lib/db-admin'
import { siteInfo } from 'utils/siteMetadata'

export async function getStaticProps() {
  const { blogs } = await getAllPosts(siteInfo.author)

  if (!blogs) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blogs
    },
    revalidate: 60
  }
}

export default function Index({ blogs }) {
  return (
    <Layout>
      <Head>
        <title>{siteInfo.title}</title>
      </Head>
      <div className="mt-10 px-10" >
        {blogs &&
          blogs.map(post => (
            <div key={post.id}>
              <Link href={`/blog/${post.title}`}><a><h1 className="big-title">{post.title}</h1></a></Link>
              <h2 className="mt-6 text-xl md:text-3xl">{post.description}</h2>
              <p className="mt-6">Don't click the link though, that doesn't work yet 👋</p>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}
