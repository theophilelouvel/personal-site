import Sidebar from 'components/Navigation/Sidebar'
import MobileMenu from 'components/Navigation/MobileMenu'
import NProgress from 'nprogress'
import Router from 'next/router'
import { useState, useEffect } from "react"
import { useTheme } from 'next-themes';

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default function Layout({ children, home }) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    return <>
        <div className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl md:divide-x mx-auto dark:divide-amber-600">
                <div>
                    <Sidebar />
                    <MobileMenu />
                </div>
                <div className="mt-20 md:mt-0 md:ml-64 px-3 md:px-6 lg:px-12 xl:px-24 pb-12 md:pb-0 overflow-y-auto md:min-h-screen">
                    <div className="hidden md:block float-right mt-16">
                        <button
                            aria-label="Toggle Dark Mode"
                            type="button"
                            className="bg-amber-600 rounded p-3 h-10 w-10 focus:outline-none md:transform md:hover:scale-95 md:transition duration-300"
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
                    </div>
                    {children}
                </div>
            </div>
        </div>
    </>
}
