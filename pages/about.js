import Link from 'next/link'
import Layout from 'components/Layout'
import MetaHeader from 'components/Social/MetaHeader'
import { siteInfo } from 'utils/siteMetadata'
import TechCards from 'components/TechCards'

export default function About() {

    const pageMeta = {
        title: "About - Théo Louvel",
        slug: "/about",
        description: siteInfo.description,
        content: "website",
        locale: "en_US",
        cover: {
            url: "https://source.unsplash.com/pIY6sz-texg/1200x630",
            alt: "about Théo Louvel",
        },
    }

    return <>
        <MetaHeader pageMeta={pageMeta} />
        <Layout>
            <header className="mb-8 md:mb-10 lg:mb-12 mt-5 md:mt-16">
                <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-bluegray-200 font-light mb-5 md:mb-10 mt-5 md:mt-16">About</h2>
            </header>

            <main className="markdown">
                <p>👋 Hi, I'm Théo, a <strong>full-stack / backend developer</strong> from Paris, France.</p>

                <p>I'm widely interested in systems programming, backend development and web development in general.</p>

                {/* <p>I graduated as a jurist in International Business Law, received officer training in the French military and worked as a linguist until '20.</p>

                <p>Despite my love for languages, being able to ask for more cheese in five different languages felt redundant after a while...</p>

                <p>Programming conciliates my passion for strategic thinking, reverse engineering and hands-on learning.</p> */}

                <p>I speak French, English, Russian and I code in <strong>Rust & JavaScript</strong>. Below is a non-exhaustive list of some tools and languages I have worked with:</p>

                {/* <p><em> P.S.: If you wonder what my name sounds like, just click on it's phonetic transcription (desktop only)! </em></p> */}

                {/* <h3 className="font-semibold text-xl lg:text-3xl text-amber-600">My Tech Stack</h3> */}

                <TechCards
                    techs={[
                        { name: 'Rust', src: '/img/techs/rust.svg', href: 'https://www.rust-lang.org/' },
                        { name: 'TypeScript', src: '/img/techs/typescript.svg', href: 'https://www.typescriptlang.org/' },
                        { name: 'JavaScript', src: '/img/techs/javascript.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                        { name: 'Java', src: '/img/techs/java.svg', href: 'https://www.java.com/' },
                        { name: 'Firebase', src: '/img/techs/firebase.svg', href: 'https://firebase.google.com/' },
                        { name: 'MongoDB', src: '/img/techs/mongodb.svg', href: 'https://www.mongodb.com/' },
                        { name: 'Node.js', src: '/img/techs/nodejs.svg', href: 'https://nodejs.org/en/' },
                        { name: 'Sanity', src: '/img/techs/sanity.png', href: 'https://www.sanity.io/' },
                        { name: 'React', src: '/img/techs/react.svg', href: 'https://reactjs.org/' },
                        { name: 'Next.js', src: '/img/techs/nextjs.svg', href: 'https://nextjs.org/' },
                        { name: 'Redux', src: '/img/techs/redux.svg', href: 'https://redux.js.org/' },
                        { name: 'Express', src: '/img/techs/express.svg', href: 'http://expressjs.com/' },
                        { name: 'Git', src: '/img/techs/git.svg', href: 'https://git-scm.com/' },
                        { name: 'GitHub', src: '/img/techs/github.svg', href: 'https://github.com/' },
                        { name: 'Webpack', src: '/img/techs/webpack.svg', href: 'https://webpack.js.org/' },
                        { name: 'Jest', src: '/img/techs/jest.svg', href: 'https://jestjs.io/' },
                        { name: 'CSS', src: '/img/techs/css.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                        { name: 'HTML', src: '/img/techs/html.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                        { name: 'Tailwind', src: '/img/techs/tailwindcss.svg', href: 'https://tailwindcss.com/' },
                        { name: 'Electron', src: '/img/techs/electron.svg', href: 'https://www.electronjs.org/' },
                    ]} />
            </main>

            <div className="flex justify-center my-16">
                <Link href="/"><a className="link-color">
                    ← Home
            </a></Link>
            </div>
        </Layout>
    </>
}
