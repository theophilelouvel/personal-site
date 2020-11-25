// import Head from 'next/head'
// import Link from 'next/link'
import Layout from 'components/Layout'
// import { getAllPosts } from 'lib/db-admin'
import { siteInfo, mediumArticles } from 'utils/siteMetadata'

export default function Index() {
  return (
    <Layout>
      <div className="mt-10 px-10">
        <h1 className="big-title">👋 Hi! I'm still building this site, here are some of my articles on medium in the mean time!</h1>
        <br />
        {mediumArticles &&
          mediumArticles.map(article => (
            <article key={article.key}>
              <h2 className="font-semibold text-gray-700 text-xl"><a href={article.href} target="_blank">{article.title}</a></h2>
              <h3 className="font-light">{article.description}</h3>
              <br />
            </article>
          ))}
      </div>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const { blogs } = await getAllPosts(siteInfo.author)

//   if (!blogs) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       blogs
//     },
//     revalidate: 60
//   }
// }


