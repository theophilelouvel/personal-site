import Sidebar from 'components/Navigation/Sidebar'
import MobileMenu from 'components/Navigation/MobileMenu'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default function Layout({ children, home }) {
    return <>
        <div className="bg-white">
            <div className="max-w-screen-xl md:divide-x mx-auto">
                <header>
                    <Sidebar />
                    <MobileMenu />
                </header>
                <main className="mt-20 md:mt-0 md:ml-64 px-3 md:px-6 lg:px-12 xl:px-24 pb-12 md:pb-0 overflow-y-auto md:min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    </>
}
