import Link from 'next/link'
import Layout from 'components/Layout'
import MetaHeader from 'components/Social/MetaHeader'
import { siteInfo } from 'utils/siteMetadata'
// import TechCards from 'components/TechCards'

export default function Custom404() {

    const pageMeta = {
        title: "About - Théo Louvel",
        slug: "/about",
        description: siteInfo.description,
        content: "website",
        locale: "en_US",
        cover: {
            url: "https://source.unsplash.com/pIY6sz-texg/1200x630",
            alt: "About - Théo Louvel",
        },
    }

    return <>
        <MetaHeader pageMeta={pageMeta} />
        <Layout>
            <header className="mb-8 md:mb-10 lg:mb-12 mt-5 md:mt-16">
                <h1 className="big-title">About</h1>
            </header>

            <main className="markdown">
                <p>👋 Hi, I'm Théo, a <strong>software engineer with a focus on web development</strong>.</p>

                {/* <p>I graduated as a jurist in International Business Law, received officer training in the French military and worked as a linguist until '20.</p>

                <p>Despite my love for languages, being able to ask for more cheese in five different languages felt redundant after a while...</p>

                <p>Programming conciliates my passion for strategic thinking, reverse engineering and hands-on learning.</p> */}

                <p>I mostly speak French, English, Russian and I code in <strong>Rust & JavaScript</strong>.</p>

                <p><em> P.S.: If you wonder what my name sounds like, just click on it's phonetic transcription (desktop only)! </em></p>

                {/* <h2>Tech Stack ⚡</h2>

                <TechCards
                    techs={[
                        { name: 'GitHub', src: '/img/techs/github.svg', href: 'https://github.com/' },
                        { name: 'Node.js', src: '/img/techs/nodejs.svg', href: 'https://nodejs.org/en/' },
                        { name: 'Express', src: '/img/techs/express.svg', href: 'http://expressjs.com/' },
                        { name: 'Webpack', src: '/img/techs/webpack.svg', href: 'https://webpack.js.org/' },
                        { name: 'React', src: '/img/techs/react.svg', href: 'https://reactjs.org/' },
                        { name: 'Redux', src: '/img/techs/redux.svg', href: 'https://redux.js.org/' },
                        { name: 'Jest', src: '/img/techs/jest.svg', href: 'https://jestjs.io/' },
                        { name: 'Next.js', src: '/img/techs/nextjs.svg', href: 'https://nextjs.org/' },
                        { name: 'Firebase', src: '/img/techs/firebase.svg', href: 'https://firebase.google.com/' },
                        { name: 'MongoDB', src: '/img/techs/mongodb.svg', href: 'https://www.mongodb.com/' },
                        { name: 'Sanity', src: '/img/techs/sanity.png', href: 'https://www.sanity.io/' },
                        { name: 'Tailwind', src: '/img/techs/tailwindcss.svg', href: 'https://tailwindcss.com/' },
                    ]} />

                <h2>Learning 🔍</h2>
                <TechCards
                    techs={[
                        { name: 'Rust', src: '/img/techs/rust.svg', href: 'https://www.rust-lang.org/' },
                        // { name: 'TypeScript', src: '/img/techs/typescript.svg', href: 'https://www.typescriptlang.org/' },
                        { name: 'Electron', src: '/img/techs/electron.svg', href: 'https://www.electronjs.org/' },
                        // { name: 'TensorFlow', src: '/img/techs/tensorflow.svg', href: 'https://www.tensorflow.org/' },
                    ]} /> */}
            </main>

            <nav className="flex justify-center my-16">
                <Link href="/"><a className="link-color">
                    ← Home
            </a></Link>
            </nav>
        </Layout>
    </>
}
