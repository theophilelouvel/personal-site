import { FiTwitter, FiYoutube, FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'

const links = [
    { name: 'twitter', href: 'https://twitter.com/theophilelouvel', icon: <FiTwitter /> },
    // { name: 'youtube', href: 'https://www.youtube.com/channel/UCco896WsL_UlJeOecstyRAA', icon: <FiYoutube /> },
    { name: 'github', href: 'https://github.com/theophilelouvel', icon: <FiGithub /> },
    { name: 'linkedin', href: 'https://www.linkedin.com/in/theophilelouvel', icon: <FiLinkedin /> },
    { name: 'mail', href: 'mailto:louveltheophile@gmail.com', icon: <FiMail /> }
]

export default function SocialIcons() {
    return (
        <div className="flex flex-row justify-center px-1 md:justify-between mx-5 mt-4 text-gray-700">
            {links.map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank" className="mx-3">
                    {icon}
                </a>
            ))}
        </div>
    )
}