import Head from 'next/head'
import Sidebar from 'components/Navigation/Sidebar'
import MobileMenu from 'components/Navigation/MobileMenu'

export default function Layout({ children, home }) {
    return (
        <div >
            <Head>
                <meta
                    name="description"
                    content="Théophile Louvel"
                />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⏄</text></svg>"></link>
            </Head>
            <div className="flex max-w-screen-2xl h-screen mx-auto divide-y md:divide-x">
                <header>
                    <Sidebar />
                    <MobileMenu />
                </header>
                <main className="mt-20 md:mt-0 overflow-y-auto w-full bg-white">
                    {/* <div className="sticky top-0 h-12 pointer-events-none inset-x-0 bg-gradient-to-b from-white md:hidden"></div> */}
                    <div className="px-8 md:px-10 py-6 md:py-14">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}