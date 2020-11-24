import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAllPosts } from 'lib/db-admin'
import Layout from 'components/Layout'
import Date from 'components/Date'
import { siteInfo } from 'utils/siteMetadata'

export async function getStaticPaths() {
    // The params key-value pair used for the path is the one matching the dynamic route [name].js
    const paths = await getAllPostsIdsAndSlugs(siteInfo.author)
    return {
        paths,
        // Switch to "true" for incremental regeneration if the number of posts grows too big
        fallback: false
    }
}

// The params are actually set through path
export async function getStaticProps({ params }) {
    const postData = await getPostById(params.id)
    return {
        props: {
            postData
        },
        // The data will be reevaluated / updated 30 minutes after a new request comes in
        revalidate: 1800
    }
}

export default function Post({ postData }) {
    const router = useRouter()
    return (
        <Layout>
        </Layout>
    )
}

            // <Head>
            //     <title>{postData.title}</title>
            //     <meta property="og:title" content={postData.title} />
            //     <meta property="og:description" content={postData.description} />
            //     <meta property="og:image" content={postData.cover} />
            //     <meta property="og:url" content={router.pathname} />
            //     <meta name="twitter:card" content={postData.cover} />
            //     {/* Non-Essential, But Recommended */}
            //     <meta property="og:site_name" content={siteInfo.title} />
            //     {/* <meta name="twitter:image:alt" content="Alt text for image" /> */}
            //     {/* Non-Essential, But Required for Analytics */}
            //     {/* <meta property="fb:app_id" content="your_app_id" />
            //     <meta name="twitter:site" content="@website-username" /> */}
            // </Head>
            // <article>
            //     <h1 className="big-title">{postData.title}</h1>
            //     <div>{postData.author}<Date dateString={postData.date} /></div>
            //     <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            // </article>