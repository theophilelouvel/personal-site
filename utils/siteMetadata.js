import { FiTwitter, FiYoutube, FiGithub, FiMail, FiLinkedin, FiRss } from 'react-icons/fi'
import { SiStackoverflow } from "react-icons/si";

const siteInfo = {
    title: 'Théophile Louvel - Full Stack Developer',
    description: 'An ongoing conversation about Web Developement, Software Engineering and Languages',
    author: 'Théophile Louvel',
    pronunciation: "te.ɔ.fil luvɛl",
    url: 'https://theophilelouvel.tech',
    favicon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 100%22><text y=%22.9em%22 font-size=%2290%22>💾</text></svg>",
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
    { name: 'rss', href: siteInfo.url + '/rss.xml', icon: <FiRss /> },
]

const currentTechs = [
    { name: 'Node.js', src: '/img/techs/nodejs.svg', href: 'https://nodejs.org/en/' },
    { name: 'React', src: '/img/techs/react.svg', href: 'https://reactjs.org/' },
    { name: 'Next.js', src: '/img/techs/nextjs.svg', href: 'https://nextjs.org/' },
    { name: 'Firebase', src: '/img/techs/firebase.svg', href: 'https://firebase.google.com/' },
    { name: 'Express', src: '/img/techs/express.svg', href: 'http://expressjs.com/' },
    { name: 'Git', src: '/img/techs/git.svg', href: 'https://git-scm.com/' },
    { name: 'GitHub', src: '/img/techs/github.svg', href: 'https://github.com/' },
    { name: 'Jest', src: '/img/techs/jest.svg', href: 'https://jestjs.io/' },
    { name: 'MongoDB', src: '/img/techs/mongodb.svg', href: 'https://www.mongodb.com/' },
    { name: 'Redux', src: '/img/techs/redux.svg', href: 'https://redux.js.org/' },
    { name: 'Tailwind', src: '/img/techs/tailwindcss.svg', href: 'https://tailwindcss.com/' },
    { name: 'Webpack', src: '/img/techs/webpack.svg', href: 'https://webpack.js.org/' },
]

const futureTechs = [
    { name: 'Rust', src: '/img/techs/rust.svg', href: 'https://www.rust-lang.org/' },
    { name: 'TypeScript', src: '/img/techs/typescript.svg', href: 'https://www.typescriptlang.org/' },
    { name: 'Electron', src: '/img/techs/electron.svg', href: 'https://www.electronjs.org/' },
    // { name: 'TensorFlow', src: '/img/techs/tensorflow.svg', href: 'https://www.tensorflow.org/' },
]

export { navLinks, socialLinks, siteInfo, currentTechs, futureTechs }