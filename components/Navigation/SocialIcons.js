import { socialLinks } from 'utils/siteMetadata'

export default function SocialIcons() {
    return (
        <div className="flex flex-row justify-center md:justify-between px-7 mt-4 text-gray-900 mb-20 md:mb-0">
            {socialLinks.map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank" className="mx-1 p-2 rounded hover:bg-bluegray-100 dark:text-bluegray-300 dark:hover:bg-bluegray-700">
                    {icon}
                </a>
            ))}
        </div>
    )
}