import { FiTwitter, FiGithub, FiMail, FiLinkedin, FiRss } from 'react-icons/fi'
import { FaDribbble } from 'react-icons/fa'

const siteInfo = {
    title: "Théo Louvel - Full Stack Developer",
    description: "Web Developer from Paris, France (Rust, JavaScript, TypeScript).",
    author: "Théo Louvel",
    pronunciation: "te.ɔ. luvɛl",
    url: 'https://theolouvel.dev',
    favicon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 100%22><text y=%22.9em%22 font-size=%2290%22>🦀</text></svg>",
    username: "theo_louvel",
    twitter: {
        organisation: undefined,
        author: "theo_louvel"
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
    { href: '/stack', label: 'Tech Stack' },
    { href: '/timeline', label: 'Timeline' },
    // { href: '/uses', label: 'Uses' }
]

const socialLinks = [
    { name: 'twitter', href: "https://twitter.com/theo_louvel", icon: <FiTwitter /> },
    { name: 'dribbble', href: "https://dribbble.com/theolouvel", icon: <FaDribbble /> },
    { name: 'github', href: "https://github.com/theolouvel", icon: <FiGithub /> },
    { name: 'linkedin', href: "https://www.linkedin.com/in/theolouvel", icon: <FiLinkedin /> },
    // { name: 'mail', href: 'mailto:louveltheophile@gmail.com', icon: <FiMail /> },
    { name: 'rss', href: siteInfo.url + '/rss.xml', icon: <FiRss /> },
]

export { navLinks, socialLinks, siteInfo }