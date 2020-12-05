export default async function generateAtomFeed(author, url, latestPosts) {

    return `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
  
  <title>${author}'s Blog</title>
  <subtitle>Blogs</subtitle>
  
  <link href="${url}/" hreflang="en" rel="alternate" type="text/html"/>
  <link href="${url}/atom" rel="self" type="application/atom+xml"/>
  <content type="xhtml" xml:lang="en" xml:base="${url}"/>
  <rights>Copyright (c) 2020, ${author}</rights>
  <updated>${latestPosts[0]?.data.date}</updated>
  <id>${author.normalize("NFD").replace(' ', '').replace(/[\u0300-\u036f]/g, "").toLowerCase()}</id>
  
  <author>
  <name>${author}</name>
  <email>louveltheophile@gmail.com</email>
  </author>
  
  ${latestPosts.map(post => {
        return `
    <entry>
    <title>${post.data.title}</title>
    <link href="${url + '/' + post.id.replace(/\.mdx?$/, '')}" rel="alternate" type="text/html"/>
    <id>${post.id.replace(/\.mdx?$/, '')}</id>
    <summary>${post?.data.description}</summary>
    <published>${post.data.date}</published>
    <updated>${post.data.updated ? post.data.updated : post.data.date}</updated>
    </entry>
    `
    }).join('')}
  
  </feed>`
}
