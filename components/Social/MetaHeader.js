import Head from 'next/head'
import { siteInfo } from 'utils/siteMetadata'

// Full list of content types: https://ogp.me/
// Properties expected from the pageMeta prop
// content: article
// cover.url & cover.alt
// locale: en_US
// description
// slug
// title (article's or page)
// updated / date

export default function MetaHeader({ pageMeta }) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="follow, index" />
            {
                pageMeta.title &&
                <title>{pageMeta.title}</title>
            }
            {
                siteInfo.username &&
                <meta property="profile:username" content={siteInfo.username} />
            }
            {/* SEO description */
                pageMeta.description &&
                <meta content={pageMeta.description} name="description" />
            }
            {
                pageMeta.description &&
                <meta property="og:description" content={pageMeta.description} />
            }
            {
                pageMeta.description &&
                <meta name="twitter:description" content={pageMeta.description} />
            }
            {
                pageMeta.locale &&
                <meta property="og:locale" content={pageMeta.locale} />
            }
            {/* Favicon */
                siteInfo.favicon &&
                <link rel="icon" href={siteInfo.favicon} />
            }
            {
                siteInfo.url && pageMeta.slug &&
                <meta property="og:url" content={`${siteInfo.url}/${pageMeta.slug}`} />
            }
            {
                pageMeta.content &&
                <meta property="og:type" content={pageMeta.content} />
            }
            {
                pageMeta.title &&
                <meta property="og:title" content={pageMeta.title} />
            }
            {
                pageMeta.cover && pageMeta.cover.url &&
                <meta property="og:image" content={pageMeta.cover.url} />
            }
            {
                siteInfo.title &&
                <meta property="og:site_name" content={siteInfo.title} />
            }
            {/* Options: "summary", “summary_large_image”, “app”, or “player” */
                siteInfo.twitter &&
                <meta name="twitter:card" content="summary_large_image" />
            }
            {
                pageMeta.cover && pageMeta.cover.alt &&
                <meta name="twitter:image:alt" content={pageMeta.cover.alt} />
            }
            {
                siteInfo.twitter && siteInfo.twitter.author &&
                <meta name="twitter:creator" content={`@${siteInfo.twitter.author}`} />
            }
            {/* Do not include for personal site if twitter account is the same as the organisation's */
                siteInfo.twitter && siteInfo.twitter.organisation &&
                <meta name="twitter:site" content={`@${siteInfo.twitter.organisation}`} />
            }
            {
                pageMeta.content === "article" ?
                    <meta property="article:author" content={siteInfo.author} />
                    : undefined
            }
            {
                pageMeta.content === "article" && pageMeta.date &&
                <meta property="article:published_time" content={pageMeta.date} />
            }
            {
                pageMeta.content === "article" && pageMeta.updated &&
                <meta property="article:modified_time" content={pageMeta.updated} />
            }
            {/* Facebook Analytics */
                siteInfo?.socialAnalytics?.facebookAppId &&
                <meta property="fb:app_id" content={siteInfo.socialAnalytics.facebookAppId} />
            }
            {/* Twitter Analytics */
                siteInfo.socialAnalytics && siteInfo.socialAnalytics.twitterAppId &&
                <meta name="twitter:site" content={siteInfo.socialAnalytics.twitterAppId} />
            }
        </Head>
    )
}