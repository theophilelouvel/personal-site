import Head from 'next/head'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="Théophile Louvel"
                />
            </Head>
            <header>
                <Nav />
            </header>
            <main>
                {children}
            </main>
            <footer >
                <Footer />
            </footer>
        </div>
    )
}