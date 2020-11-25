import Layout from 'components/Layout'
import { mediumArticles } from 'utils/siteMetadata'

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

export default function Index() {
  return (
    <Layout>

      <div className="p-10">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            👋 Hi! I'm still building this site!
                      </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            In the meantime, here are some articles I wrote on <a href="https://theophilelouvel.medium.com/" target="_blank">Medium</a>!
                      </p>
        </div>
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

          {mediumArticles &&
            mediumArticles.map(article => (
              <div key={article.key} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={article.cover} alt={article.description} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href={article.href} target="_blank" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {article.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {article.description}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}

        </div>
      </div>
    </Layout>
  )
}


