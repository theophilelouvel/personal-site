import { FiTwitter, FiYoutube, FiGithub, FiMail, FiLinkedin, FiRss } from 'react-icons/fi'
import { SiStackoverflow } from "react-icons/si";

const siteInfo = {
    favicon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 100%22><text y=%22.9em%22 font-size=%2290%22>💾</text></svg>",
    author: 'Théophile Louvel',
    pronunciation: "te.ɔ.fil luvɛl",
    title: 'Théophile Louvel - Full Stack Developer',
    description: 'An ongoing conversation about Web Developement, Software Engineering & Languages',
    url: 'https://theophilelouvel.tech',
    username: 'theophilelouvel',
    twitter: {
        organisation: undefined,
        author: 'theophilelouvel'
    },
    socialAnalytics: {
        facebookAppId: undefined,
        twitterAppId: undefined
    }
}

const navLinks = [
    { href: '/', label: 'Blog' },
    // { href: '/projects', label: 'Projects' },
    // { href: '/dashboard', label: 'Dashboard' },
    // { href: '/photography', label: 'Photography' },
    { href: '/about', label: 'About' },
    // { href: '/uses', label: 'Uses' }
]

const socialLinks = [
    { name: 'twitter', href: 'https://twitter.com/theophilelouvel', icon: <FiTwitter /> },
    { name: 'stackoverflow', href: 'https://stackoverflow.com/users/14192686/th%c3%a9ophile-louvel', icon: <SiStackoverflow /> },
    // { name: 'youtube', href: 'https://www.youtube.com/channel/UCco896WsL_UlJeOecstyRAA', icon: <FiYoutube /> },
    { name: 'github', href: 'https://github.com/theophilelouvel', icon: <FiGithub /> },
    { name: 'linkedin', href: 'https://www.linkedin.com/in/theophilelouvel', icon: <FiLinkedin /> },
    // { name: 'mail', href: 'mailto:louveltheophile@gmail.com', icon: <FiMail /> },
    { name: 'atom', href: siteInfo.url + '/atom', icon: <FiRss /> },
]

export { navLinks, socialLinks, siteInfo }