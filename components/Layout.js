import Head from 'next/head'
import Nav from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="Théophile Louvel"
                />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⏄</text></svg>"></link>
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