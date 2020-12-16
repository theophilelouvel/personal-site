---
title: Blog Building and Yak Shaving
description: A short story of building this blog
date: "2020-12-13"
updated: "2020-12-13"
cover: Ljim28haqBY
---
 
**Yak shaving** is the deceptive causality that leads you to switch from one task to another, each time taking you further away from your original goal.
 
To get a better grasp of the concept, watch this 30 seconds video of [Hal replacing a light bulb](https://www.youtube.com/watch?v=8fnfeuoh4s8) or read [this note by Seth Godin](https://seths.blog/2005/03/dont_shave_that/). 
 
We all have to face that yak at times, and building this blog was no exception.
 
## User Story (aka yours truly)
 
I wanted a handcrafted shiny new place to rant about languages and programming.
 
A blog it is then!
 
## The tech stack
 
**In my mind, a blog should be blazing fast and have good SEO**. As pages don't change on a regular basis, this obviously called for **static generation** (pre-rendering pages at build time, which allows to serve the same document over and over to many clients instead of having to generate the pages upon each request as with "classic" server-side rendering).
 
[Next.js](https://nextjs.org/) is a React framework that allows you to do just that. But, cherry on top, unlike other frameworks it doesn't just stop there: You can use static generation on *some pages* while still serving fully-fledged web apps on others. **The perfect mix of speed and versatility!**
 
Regarding styling, this was a no-brainer: I adopted [Tailwind CSS](https://tailwindcss.com/) a while ago and I will keep using it everywhere I can! It allows you to style components... in the components themselves, avoiding jumping back and forth between files and providing a clear and minimal syntax to do so.
 
Technicality is nice and all, but I also wanted a human-friendly way of writing blog posts and creating new pages without going through the hassle of writing plain old HTML. **If you're going to have a lot of somewhat similar content, you might as well build a pipeline for it**, which will help mitigate friction when working on new additions.
 
The obvious solution was using Markdown, so that I could serialize it into HTML and render it to the screen. With that came the question of where to store that Markdown... And so my yak shaving party started.
 
## Yak shaving party
 
As I had some hesitations as to what techs to use for the blog posts themselves, I set out to try them all.
 
**1. Local `.md` files**
 
This is the most straightforward approach: You just read and parse `.md` files from the filesystem at build time. It sounds like a naive approach at first, as **it isn't a scalable solution**.
 
But the real question is: Do I need scalability? The scope of this project is quite narrow, so it might just do the trick. We'll see... In the meantime, moving on to the next option!
 
**2. Store markdown strings with Firestore**
 
This approach is already more scalable. Basically all posts would be stored under the form of a long string of markdown in the database's documents. Firestore's limit for document size being 10mb, this is the perfect database for the job. But how do you notify your Next.js website when there's new content? 
 
## Going remote with Next.js
 
The issue with remote data for static generated pages is to trigger rebuilds when new content appears so it's effectively reflected on the website. Fortunately, Next.js provides us with two handy hacks to do so: **incremental rebuilds** and **fallback urls**.
 
**Incremental rebuild means you can set a timeout to rebuild a page after it was visited**, meaning that just opening your website will in fact update it for the next person while not going through the process of rebuilding the whole website. I think it might be a good idea to be reasonable with that timeout especially if you're getting consistent traffic as you will waste computing resources on each and every visit if you set it to 1 second (this is my understanding anyway).
 
It's as easy as adding one line, `revalidate: 1800`, like so:
 
```js:[post].js
export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.post)
 
    return {
        props: {
            post
        },
        // This page will be updated 1800 seconds after each visit
        revalidate: 1800
    }
}
```
 
**Fallback urls mean you can have server-side rendering and static generation at the same time**: Basically you don't build *all* pages at build time, which could potentially take hours for large ecommerce websites for instance, but rather upon request: When a request comes in for a page that wasn't built, it gets built and cached. The "tradeoff" (if you can call it that) is that one user will have to wait a little longer for the page that wasn't built (since it's essentially server-side rendering for him), but after that it stays cached and gets served as a statically generated page: The best of both worlds.
 
And it's as simple as writing `fallback: true` 👇
 
```js:[post].js
export const getStaticPaths = async () => {
    const paths = await getPostsPaths()
 
    return {
        paths,
        // Most pages will be built and cached at request time
        fallback: true,
    }
}
```
 
Back to building this blog, storing posts as documents in Firestore also implies coming up with a web or desktop app to send said posts to the database so they can be read by the blog, which is getting somewhat overkill for the scope of this project.
 
**3. Remote `.md` files with Firebase storage**
 
So, what about storing actual `.md` files in Firebase storage? It would allow me to write markdown on my computer to later drag and drop those files to storage. **Firebase's SDK provides methods for clients to loop over a storage bucket**, and get each and every post back as a blob (binary large object) that I could first parse then serialize on the server.
 
However, this also meant I could no longer use fallback urls as I would need to loop over the storage bucket at build time, since fetching a single file require its url, which means you need to store its url into a database, which means back to another app just for managing the content, which was kind of defeating the purpose of remotely storing my content. Doable and scalable, but again, way overkill for my purpose.
 
Back to square one.
 
**4. Remote CMS with Sanity**
 
I heard about [Sanity.io](https://www.sanity.io/) during the Next.js conf, and decided to try out their CMS (Content Management System).
 
**It's like a database on steroids**. You can completely customize rich document models, allowing the user / client / yourself to write and upload images from the Sanity studio (no need to build a separate app for managing content on your own anymore), while including everything you'd expect from a database, just user-friendly (setting dates, attributing posts to author, generating slugs etc.).
 
You can then query this database from your server with [Sanity's very own query language GROQ](https://www.sanity.io/docs/groq), which is now kind of my favorite query language. It's minimalist, expressive and allows for projection and much more, in short everything you need for querying documents. It looks like this:
 
```js:lib/posts.js
const query = `*[_type == "post"] | order(publishedAt desc) {
    'id': _id,
    title,
    description,
    'slug': slug.current,
    'published': publishedAt,
    'updated': _updatedAt
  }[0...10]`
 
const postsForAtomFeed = await sanity.fetch(query)
```
 
**The best part is all your data and media gets cached**, making querying rich documents a breeze. This pairs well with Next.js fallback urls, allowing to dynamically build pages at request time using the data you got back from Sanity's API. Even better, the url builder allows you to query images in any size and format you need. **The second best part is you can choose to work with fresh data if you need to**, although cached data gets updated fast enough upon modifications that I fail to see too many use cases for it.
 
This is by far **the most efficient and scalable solution there is for remote content**, and their generous free tier would have basically made it free for life for my blog.
 
There's one caveat though: While styling blog posts with CSS modules is a breeze, it's not exactly as easy with Tailwind CSS, which styles things by giving an UI element a `className`. It was a tough call, but this is the only reason I didn't go with Sanity in the end. I can't wait to use it for other projects like ecommerce websites though.
 
**5. Remote MDX with Firebase**
 
Another interesting idea I came across while [reading Adam on the Tailwind Blog](https://blog.tailwindcss.com/building-the-tailwind-blog) is to use remote MDX files with Hashicorp's [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote). The MDX format is a hybrid of markdown and JSX that allows you to seamlessly switch between those syntaxes in one file. Very handy when you need somewhat similar but slightly different pages!
 
My first thought was to go back to Firestore and store MDX strings there, but that would have been the content management issue all over again and the idea of having everything in one place had kind of grown on me at that point.
 
The cool part with this configuration is I can serialize MDX right in `getStaticProps` and hydrate it on the client side, like so:
 
```js:[page].js
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
 
import Test from '../components/test'
 
const components = { Test }
 
export default function TestPage({ source }) {
  const content = hydrate(source, { components })
  return <div className="wrapper">{content}</div>
}
 
export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = 'Some **mdx** text, with a component <Test />'
  const mdxSource = await renderToString(source, { components })
  return { props: { source: mdxSource } }
}
```
 
This also means that **I still have the option to make all content remote if I ever needed to**, making this solution both fast to implement and scalable, which is essentially what I needed.
 
So why did I use it only for pages and not for blog posts in the end?
 
**6. Local MDX and Markdown**
 
Since I didn't really need components for my blog posts that are text-based and code-centric, I adopted this solution only for dynamic pages and went with local markdown files, which was my first hunch. That allows me to use an `.md` parser called `unified` which pairs with **plugins for custom serialization**, which in the end is what I needed most. For instance, there's a plugin that capitalizes the titles the way they should look like (I had to modify it a bit though, and [my pull request](https://github.com/vercel/remark-capitalize/pull/6) on those changes is still pending on Github 😬), one that allows me to style code blocks and display file names (kind of the main topic here, you see), etc.
 
Serializing looks like this at the moment:
 
```js:lib/posts.js
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
import highlight from 'remark-highlight.js'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import codeTitle from 'remark-code-titles'
import capitalize from 'utils/remark-capitalize-with-options'

 const processedContent = await unified()
        .use(markdown)
        .use(slug)
        .use(headings, { behavior: 'wrap' })
        .use(codeTitle)
        .use(highlight)
        .use(capitalize, { options })
        .use(html)
        .process(content)
```
 
## The SEO side of things
 
🚨 Notice I say *good* SEO as in "good practices", not *great* as in "clickbait". In my opinion, **good SEO means optimized indexation** (creating tags for search engines to read and help them understand what your page is about). People looking for the information you deliver or the goods you sell should stumble onto your content if it's relevant enough, but that's it.
 
I don't believe in SEO strategies and SEO-driven content. This calls for dull content people run away from as soon as they open it and doesn't have a great future as **search engines become better and better at telling people overdoing the SEO and clickbait thing from those actually busy making useful stuff.** Bounce rates don't lie.
 
That being said, my solution for that was to use `front-matter` to parse the metadata in my `.md` files and leverage that to dynamically create meta tags search engines and social sharing platforms could read from.
 
There's a plugin called `next-seo` or something along those lines for that purpose, but in the end I decided to write my own as it gave me more flexibility. The problem with one-size-fits-all solutions is they cover a good part of use cases, but need anything beyond that and you'll have to hack the heck out of the so-called "solution", making it effectively easier to just write this code yourself from scratch.
 
If you wonder what it looks like in practice, just crack open Firefox or Chrome dev tools and look at the `<head>` of this very page! It's essentially just a component that I include in every page thanks to the `<Head>` component made available to us by Next.js:
 
```js:components/metaHeader.js
import Head from 'next/head'
import { siteInfo } from 'utils/siteMetadata'
 
export default function MetaHeader({ pageMeta }) {
    return (
        <Head>
            {
                pageMeta.title &&
                <title>{pageMeta.title}</title>
            }
 
            {
                pageMeta.description &&
                <meta name="description" content={pageMeta.description} />
            }
            // and so on and so on
        </Head>
    )
}
```
 
There is much more to meta tags than that, but you get the idea. A title and a description is a good place to start, after that you might want to get into open graph protocols and social cards, but that's for another article!
 
## A conclusion called conclusion 🤦‍♂️
 
I'm actually glad I did all that, as I now feel even more comfortable with those techs and discovered Sanity along the way.

As always, testing is the only way to know for sure what works and what doesn't!

[The source code for this blog is here](https://github.com/theophilelouvel/personal-site) if you want to peek into it!
 
*P.S.: I'm sorry I couldn't provide code examples for all the solutions mentioned earlier, but as I write this article many files have seen themselves out into the trash, so there's that. You could DM me on twitter though and I could point you to the documentation I found on the subject.*