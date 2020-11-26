import Layout from 'components/Layout'
import sanity from "../lib/sanity";

const query = `
*[_type == "post"] | order(publishedAt desc)
  {
    title,
  }
  [0...7]
  `

export const getStaticProps = async () => {
  const posts = await sanity.fetch(query)

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }, revalidate: 60
  }
}

export default function Blog({ posts }) {
  return (
    <Layout>
      <div>
        {posts &&
          posts.map(post => (
            <h1 className="big-title">{post.title}</h1>
          ))
        }
      </div>
    </Layout>
  )
}

