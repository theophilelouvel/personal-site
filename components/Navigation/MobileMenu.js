import { useState, useEffect } from 'react'
import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { siteInfo } from 'utils/siteMetadata'
import { useTheme } from 'next-themes';
import ThemeToggle from "components/ThemeToggle"

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const handleToggle = () => setIsOpen(!isOpen)

	return (
		<>
			<div className="z-30 overflow-hidden bg-blur firefox:bg-white dark:firefox:bg-bluegray-900 firefox:bg-opacity-90 dark:firefox:bg-opacity-80 md:hidden fixed top-0 flex flex-row items-center justify-between p-6 w-screen h-20">
				<div className="flex flex-1 items-center">
					<ThemeToggle />
					<div className="text-left pl-3">
						<h1 className="font-bold text-xl text-gray-900 no-underline dark:text-bluegray-300">
							{siteInfo.author}
						</h1>
					</div>
				</div>
				<button onClick={handleToggle} className="btn-nav text-gray-700">
					<FiMenu size="30px" />
				</button>
			</div >
			{isOpen && (
				<div className="z-50 h-screen w-screen bg-blur firefox:bg-white dark:firefox:bg-bluegray-900 firefox:bg-opacity-90 dark:firefox:bg-opacity-80 flex flex-col items-center fixed top-0 pt-10 md:hidden">
					<button onClick={handleToggle} className="btn-nav fixed top-4 right-6">
						<FiX size="30px" />
					</button>
					<NavLinks handleToggle={handleToggle} />
					<div className="fixed bottom-16">
						<SocialIcons />
					</div>
				</div>
			)}
		</>
	)
}
