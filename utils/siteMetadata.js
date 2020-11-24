import { FiTwitter, FiYoutube, FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'

const siteInfo = {
    author: 'Théophile Louvel',
    title: 'Théophile Louvel\'s blog',
    description: 'A blog about React, Next.js, Firebase, MongoDB, Tailwind CSS and Chakra UI'
}

const navLinks = [
    { href: '/', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
    // { href: '/dashboard', label: 'Dashboard' },
    // { href: '/photography', label: 'Photography' },
    { href: '/about', label: 'About' },
    { href: '/uses', label: 'Uses' }
]

const socialLinks = [
    { name: 'twitter', href: 'https://twitter.com/theophilelouvel', icon: <FiTwitter /> },
    // { name: 'youtube', href: 'https://www.youtube.com/channel/UCco896WsL_UlJeOecstyRAA', icon: <FiYoutube /> },
    { name: 'github', href: 'https://github.com/theophilelouvel', icon: <FiGithub /> },
    { name: 'linkedin', href: 'https://www.linkedin.com/in/theophilelouvel', icon: <FiLinkedin /> },
    { name: 'mail', href: 'mailto:louveltheophile@gmail.com', icon: <FiMail /> }
]

export { navLinks, socialLinks, siteInfo }