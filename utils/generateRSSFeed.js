export default async function generateRSSFeed(siteInfo, latestPosts) {

    // const authorID = author.normalize("NFD").replace(' ', '').replace(/[\u0300-\u036f]/g, "").toLowerCase()

    return `<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:webfeeds="http://webfeeds.org/rss/1.0" version="2.0">
<channel>
<title>${siteInfo.author}</title>
<subtitle>${siteInfo.description}</subtitle>
<atom:link href="${siteInfo.url + '/rss.xml'}" rel="self" type="application/rss+xml"/>
<link>${siteInfo.url + '/'}</link>
<language>en-us</language>
<lastBuildDate>${latestPosts[0]?.data.updated}</lastBuildDate>
<webfeeds:icon>${siteInfo.url + '/img/avatar.jpg'}</webfeeds:icon>
<webfeeds:related layout="card" target="browser"/>

${latestPosts.map(post => {
        return `
    <item>
    <title>${post.data.title}</title>
    <link>${siteInfo.url + '/blog/' + post.slug}</link>
    <pubDate>${post.data.updated ? post.data.updated : post.data.date}</pubDate>
    <guid>${siteInfo.url + '/blog/' + post.slug}</guid>
    <description>${post.content}</description>
    </item>
    `
    }).join('')}

</channel>
</rss>`
}


{/* <webfeeds:accentColor>0049A3</webfeeds:accentColor> */ }
{/* <webfeeds:logo>https://justinribeiro.com/images/manifest/logo.svg</webfeeds:logo> */ }
{/* <webMaster>justin@justinribeiro.com (Justin Ribeiro)</webMaster> */ }
{/* <managingEditor>justin@justinribeiro.com (Justin Ribeiro)</managingEditor> */ }
{/* <description>Software Engineer working on the Web. Speaker. Writer. Photographer. Coach. Dad. Husband. Occasionally funny.</description> */ }