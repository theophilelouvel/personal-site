import { socialLinks } from 'utils/siteMetadata'

export default function SocialIcons() {
    return (
        <div className="flex flex-row justify-center px-1 md:justify-between mx-5 mt-4 text-gray-700">
            {socialLinks.map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank" className="mx-3">
                    {icon}
                </a>
            ))}
        </div>
    )
}