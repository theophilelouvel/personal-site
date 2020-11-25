import Image from 'next/image'
import Link from 'next/link'
import SocialIcons from './SocialIcons'
import { siteInfo } from 'utils/siteMetadata'

export default function Social() {
    return (
        <div>
            <div className="hidden md:flex mt-8 justify-center mb-6">
                <Image
                    src="/avatar.jpg"
                    alt="Portrait"
                    className="w-36 rounded-full"
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex flex-col text-center">
                <Link href="/">
                    <a className="tracking-wide mt-5 md:mt-0 text-2xl no-underline text-fake-black dark:text-blue-300">
                        {siteInfo.author}
                    </a>
                </Link>
                <SocialIcons />
            </div>
        </div>
    )
}