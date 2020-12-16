import { useState } from 'react'
import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import { siteInfo } from 'utils/siteMetadata'

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="z-30 overflow-hidden bg-blur bg-white bg-opacity-70 md:hidden fixed top-0 flex flex-row items-center justify-between p-6 w-screen h-20">
                <div className="flex flex-1 items-center">
                    <Image
                        src="/img/avatar.jpg"
                        alt="Portrait"
                        className="rounded-full"
                        width={50}
                        height={50}
                    />
                    <div className="text-left pl-3">
                        <h1 className="font-bold text-xl text-gray-900 no-underline dark:text-blue-300">
                            {siteInfo.author}
                        </h1>
                    </div>
                </div>
                <button onClick={handleToggle} className="btn-nav text-gray-700">
                    <FiMenu size="30px" />
                </button>
            </div >
            {isOpen && (
                <div className="z-50 h-screen w-screen bg-blur bg-white bg-opacity-70 flex flex-col items-center fixed top-0 pt-10 md:hidden">
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
