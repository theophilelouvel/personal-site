import Sidebar from 'components/Navigation/Sidebar'
import MobileMenu from 'components/Navigation/MobileMenu'
import NProgress from 'nprogress'
import Router from 'next/router'
import { useState, useEffect } from "react"
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi'
import { motion } from "framer-motion"

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default function Layout({ children, home }) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	return <>
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="max-w-screen-xl md:divide-x mx-auto dark:divide-amber-600">
			<div>
				<Sidebar />
				<MobileMenu />
			</div>
			<div className="pt-20 md:pt-0 md:ml-64 px-3 md:px-6 lg:px-12 xl:px-24 pb-12 md:pb-0 overflow-y-auto md:min-h-screen">
				<div className="hidden md:block float-right mt-16">
					<button
						aria-label="Toggle Dark Mode"
						type="button"
						className="bg-amber-600 rounded p-3 h-10 w-10 focus:outline-none flex items-center justify-center text-center"
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					>
						{mounted && theme === 'dark' ? <FiSun size="22" className="text-bluegray-100" /> : <FiMoon size="22" className="text-bluegray-100" />}
					</button>
				</div>
				{children}
			</div>
		</motion.div>
	</>
}
