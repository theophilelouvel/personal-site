import { useState, useEffect } from 'react'
import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import { siteInfo } from 'utils/siteMetadata'
import { useTheme } from 'next-themes';

export default function MobileMenu() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="z-30 overflow-hidden bg-blur bg-white dark:bg-bluegray-900 bg-opacity-70 md:hidden fixed top-0 flex flex-row items-center justify-between p-6 w-screen h-20">
                <div className="flex flex-1 items-center">
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="bg-amber-600 rounded p-3 h-10 w-10 focus:outline-none"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        {mounted && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                className="h-4 w-4 text-bluegray-50"
                            >
                                {theme === 'dark' ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                )}
                            </svg>
                        )}
                    </button>
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
                <div className="z-50 h-screen w-screen bg-blur bg-opacity-70 flex flex-col items-center fixed top-0 pt-10 md:hidden">
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
