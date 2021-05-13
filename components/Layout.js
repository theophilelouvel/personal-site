import Sidebar from 'components/Navigation/Sidebar'
import MobileMenu from 'components/Navigation/MobileMenu'
import NProgress from 'nprogress'
import Router from 'next/router'
import ThemeToggle from "components/ThemeToggle"

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default function Layout({ children, home }) {
	return <div className="max-w-screen-xl md:divide-x mx-auto dark:divide-amber-600">
		<div>
			<Sidebar />
			<MobileMenu />
		</div>
		<div className="pt-20 md:pt-0 md:ml-64 px-3 md:px-6 lg:px-12 xl:px-24 pb-12 md:pb-0 overflow-y-auto md:min-h-screen">
			<div className="hidden md:block float-right mt-16">
				<ThemeToggle />
			</div>
			{children}
		</div>
	</div>
}
