import { getAllBlogs } from 'lib/db-admin'
import Layout from 'components/Layout'
import Link from 'next/link'

export async function getStaticProps() {
  const { blogs } = await getAllBlogs('Theophile Louvel')

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
      <div className="mt-10 px-10" >
        {blogs &&
          blogs.map(blog => (
            <div key={blog.id}>
              <Link href={`/blog/${blog.title}`}><a>
                <h1 className="big-title">{blog.title}</h1>
              </a></Link>
              <h2 className="mt-6 text-xl md:text-3xl">{blog.description}</h2>
              <p className="mt-6">Don't click the link though, that doesn't work yet 👋</p>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}
