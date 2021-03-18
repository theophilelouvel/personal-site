import Sidebar from 'components/Navigation/Sidebar'
import MobileMenu from 'components/Navigation/MobileMenu'
import NProgress from 'nprogress'
import Router from 'next/router'
// import { isMobile } from "react-device-detect"

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default function Layout({ children, home }) {
    return <>
        <div className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl md:divide-x mx-auto dark:divide-amber-600">
                <div>
                    <Sidebar />
                    <MobileMenu />
                </div>
                <main className="mt-20 md:mt-0 md:ml-64 px-3 md:px-6 lg:px-12 xl:px-24 pb-12 md:pb-0 overflow-y-auto md:min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    </>
}
