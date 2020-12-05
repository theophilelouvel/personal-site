import { siteInfo } from 'utils/siteMetadata'

export default async function generateAtomFeed(latestPosts) {

    return `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
  
  <title>${siteInfo.author}'s Blog</title>
  <subtitle>${siteInfo.description}</subtitle>
  
  <link href="${siteInfo.url}/" hreflang="en" rel="alternate" type="text/html"/>
  <link href="${siteInfo.url}/atom" rel="self" type="application/atom+xml"/>
  <content type="xhtml" xml:lang="en" xml:base="${siteInfo.url}"/>
  <rights>Copyright (c) 2020, ${siteInfo.author}</rights>
  <updated>${latestPosts[0]?.data.date}</updated>
  <id>${siteInfo.author.normalize("NFD").replace(' ', '').replace(/[\u0300-\u036f]/g, "").toLowerCase()}</id>
  
  <author>
  <name>${siteInfo.author}</name>
  <email>louveltheophile@gmail.com</email>
  </author>
  
  ${latestPosts.map(post => {
        return `
    <entry>
    <title>${post.data.title}</title>
    <link href="${siteInfo.url + '/blog/' + post.slug}" rel="alternate" type="text/html"/>
    <id>${post.slug}</id>
    <summary>${post?.data.description}</summary>
    <published>${post.data.date}</published>
    <updated>${post.data.updated ? post.data.updated : post.data.date}</updated>
    <content type="xhtml">${post.content}</content>
    </entry>
    `
    }).join('')}

</feed>`
}



