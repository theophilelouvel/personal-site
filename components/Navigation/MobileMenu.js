import { useState } from 'react'
import NavLinks from './NavLinks'
import SocialIcons from './SocialIcons'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="md:hidden fixed top-0 flex flex-row items-center justify-between p-6 w-screen h-20 bg-white">
                <div className="flex flex-1 items-center">
                    <Image
                        src="/avatar.jpg"
                        alt="Portrait"
                        className="rounded-full"
                        width={50}
                        height={50}
                    />
                    <div className="text-left pl-3">
                        <Link href="/">
                            <a className="text-xl font-semibold text-gray-800 no-underline dark:text-blue-300">
                                Théophile Louvel
                    </a>
                        </Link>
                    </div>
                </div>
                <button onClick={handleToggle} className="btn-nav text-gray-700">
                    <FiMenu size="30px" />
                </button>
            </div >
            {isOpen && (
                <div className="z-10 flex flex-col items-center fixed top-0 pt-10 md:hidden bg-white">
                    <button onClick={handleToggle} className="btn-nav fixed top-4 right-6">
                        <FiX size="30px" />
                    </button>
                    <NavLinks />
                    <div className="fixed bottom-16">
                        <SocialIcons />
                    </div>
                </div>
            )}
        </>
    )
}
