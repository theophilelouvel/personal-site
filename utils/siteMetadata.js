import { FiTwitter, FiYoutube, FiGithub, FiMail, FiLinkedin, FiRss } from 'react-icons/fi'
import { SiStackoverflow } from "react-icons/si";

const siteInfo = {
    title: "Théo Louvel - Full Stack Developer",
    description: "Web Developer from Paris, France (Rust, JavaScript, TypeScript).",
    author: "Théo Louvel",
    pronunciation: "te.ɔ. luvɛl",
    url: 'https://theophilelouvel.tech',
    favicon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 100%22><text y=%22.9em%22 font-size=%2290%22>🦀</text></svg>",
    username: "flowsn4ke",
    twitter: {
        organisation: undefined,
        author: "flowsn4ke"
    },
    socialAnalytics: {
        facebookAppId: undefined,
        twitterAppId: undefined
    }
}

const navLinks = [
    { href: '/', label: 'Blog' },
    // { href: '/dashboard', label: 'Dashboard' },
    // { href: '/photography', label: 'Photography' },
    { href: '/about', label: 'About' },
    { href: '/timeline', label: 'Timeline' },
    // { href: '/uses', label: 'Uses' }
]

const socialLinks = [
    { name: 'twitter', href: "https://twitter.com/flowsn4ke", icon: <FiTwitter /> },
    // { name: 'stackoverflow', href: "https://stackoverflow.com/users/14192686/th%c3%a9ophile-louvel", icon: <SiStackoverflow /> },
    // { name: 'youtube', href: 'https://www.youtube.com/channel/UCco896WsL_UlJeOecstyRAA', icon: <FiYoutube /> },
    { name: 'github', href: "https://github.com/flowsn4ke", icon: <FiGithub /> },
    { name: 'linkedin', href: "www.linkedin.com/in/theolouvel", icon: <FiLinkedin /> },
    // { name: 'mail', href: 'mailto:louveltheophile@gmail.com', icon: <FiMail /> },
    { name: 'rss', href: siteInfo.url + '/rss.xml', icon: <FiRss /> },
]

export { navLinks, socialLinks, siteInfo }