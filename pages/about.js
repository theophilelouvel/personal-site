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
                <h2 className="text-3xl lg:text-4xl text-amber-600 font-light mb-5 md:mb-10 mt-5 md:mt-16">About</h2>
            </header>

            <main className="markdown">
                <p>👋 Hi, I'm Théo, a <strong>full-stack / backend developer</strong> from Paris, France.</p>

                <p>Below is a non-exhaustive list of some tools and languages I have worked with:</p>

                <section id="languages">
                    <h3 className="text-gray-900 hover:text-amber-600 dark:text-bluegray-300 font-semibold text-lg lg:text-xl mb-4 mt-8"><a href="#languages">Languages</a></h3>
                    <TechCards techs={[
                        { name: 'Rust', src: '/img/techs/rust.svg', href: 'https://www.rust-lang.org/' },
                        { name: 'TypeScript', src: '/img/techs/typescript.svg', href: 'https://www.typescriptlang.org/' },
                        { name: 'JavaScript', src: '/img/techs/javascript.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                        { name: 'Java', src: '/img/techs/java.svg', href: 'https://www.java.com/' },
                        { name: 'CSS', src: '/img/techs/css.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                        { name: 'HTML', src: '/img/techs/html.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                    ]} />
                </section>

                <section id="frameworks">
                    <h3 className="text-gray-900 hover:text-amber-600 dark:text-bluegray-300 font-semibold text-lg lg:text-xl mb-4 mt-8"><a href="#frameworks">Frameworks</a></h3>
                    <TechCards techs={[
                        { name: 'Node.js', src: '/img/techs/nodejs.svg', href: 'https://nodejs.org/en/' },
                        { name: 'React', src: '/img/techs/react.svg', href: 'https://reactjs.org/' },
                        { name: 'Next.js', src: '/img/techs/nextjs.svg', href: 'https://nextjs.org/' },
                        { name: 'Express', src: '/img/techs/express.svg', href: 'http://expressjs.com/' },
                        { name: 'Jest', src: '/img/techs/jest.svg', href: 'https://jestjs.io/' },
                        { name: 'Electron', src: '/img/techs/electron.svg', href: 'https://www.electronjs.org/' },
                    ]} />
                </section>

                <section id="databases">
                    <h3 className="text-gray-900 hover:text-amber-600 dark:text-bluegray-300 font-semibold text-lg lg:text-xl mb-4 mt-8"><a href="#databases">Databases & State Management</a></h3>
                    <TechCards techs={[
                        { name: 'Firebase', src: '/img/techs/firebase.svg', href: 'https://firebase.google.com/' },
                        { name: 'MongoDB', src: '/img/techs/mongodb.svg', href: 'https://www.mongodb.com/' },
                        { name: 'Sanity', src: '/img/techs/sanity.png', href: 'https://www.sanity.io/' },
                        { name: 'Redux', src: '/img/techs/redux.svg', href: 'https://redux.js.org/' },
                    ]} />
                </section>

                <section id="platforms">
                    <h3 className="text-gray-900 hover:text-amber-600 dark:text-bluegray-300 font-semibold text-lg lg:text-xl mb-4 mt-8"><a href="#platforms">Deployment platforms & Project Management</a></h3>
                    <TechCards techs={[
                        { name: "Heroku", src: "/img/techs/heroku.svg", href: "https://www.heroku.com/" },
                        { name: "Vercel", src: "/img/techs/vercel.svg", href: "https://vercel.com/" },
                        { name: 'Git', src: '/img/techs/git.svg', href: 'https://git-scm.com/' },
                        { name: 'GitHub', src: '/img/techs/github.svg', href: 'https://github.com/' },
                    ]} />
                </section>

                <section id="tools">
                    <h3 className="text-gray-900 hover:text-amber-600 dark:text-bluegray-300 font-semibold text-lg lg:text-xl mb-4 mt-8"><a href="#tools">Tools</a></h3>
                    <TechCards
                        techs={[
                            { name: 'Webpack', src: '/img/techs/webpack.svg', href: 'https://webpack.js.org/' },
                            { name: 'Tailwind', src: '/img/techs/tailwindcss.svg', href: 'https://tailwindcss.com/' },

                        ]} />
                </section>

            </main>

            <div className="flex justify-center my-16">
                <Link href="/"><a className="link-color">
                    ← Home
            </a></Link>
            </div>
        </Layout>
    </>
}
