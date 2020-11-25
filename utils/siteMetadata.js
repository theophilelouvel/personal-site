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

const mediumArticles = [
    {
        key: '1',
        href: 'https://theophilelouvel.medium.com/life-is-nothing-but-a-bike-ride-7da49315ea06',
        title: 'Life is nothing but a bike ride',
        description: 'Back in summer 2014, I got struck by a crazy idea: Go from Paris to Saint Petersburg… by bike. I wrote down my adventures in some journal…'
    },
    {
        key: '2',
        href: 'https://theophilelouvel.medium.com/photography-is-the-new-writing-5c2550ae0b55',
        title: 'Photography is the new writing',
        description: 'There was a time when almost nobody knew how to write, and it was a very profitable skill. Then, at some point in history, writing became…'
    },
    {
        key: '3',
        href: 'https://theophilelouvel.medium.com/youll-never-be-ready-b504b120bafe',
        title: 'You’ll never be ready',
        description: 'Knowledge is not culture. Rather, it’s a culture: The one of being irrelevant and disconnected from reality.'
    },
    {
        key: '4',
        href: 'https://theophilelouvel.medium.com/the-man-aint-got-no-culture-8e17a78ce77a',
        title: `“The man ain’t got no culture”`,
        description: 'Culture is about belonging. Belonging to a group inside of which people understand each other, share a set of values or references...'
    },
    {
        key: '5',
        href: 'https://theophilelouvel.medium.com/the-lifeyard-b0b6166c2f3a',
        title: 'The Lifeyard',
        description: 'When confronted with new ideas, we usually do one of two things: Either we laugh at them, or we fight them.'
    },
    {
        key: '6',
        href: 'https://theophilelouvel.medium.com/more-isnt-always-the-answer-ecc66f72890c',
        title: 'More isn’t always the answer',
        description: 'Billions of dollars a year are spent to develop new medicines and treatments. But as it turns out, fasting offers the best possible…'
    },
    {
        key: '7',
        href: 'https://theophilelouvel.medium.com/oh-the-traffic-jams-in-moscow-5179f330d1ae',
        title: 'Oh, the traffic jams in Moscow!',
        description: 'When confronted with new ideas, we usually do one of two things: Either we laugh at them, or we fight them.'
    },
    {
        key: '8',
        href: 'https://theophilelouvel.medium.com/the-originality-trap-aka-the-writers-block-52a9ccd1c7ea',
        title: 'The Originality Trap (aka the Writer’s Block)',
        description: 'Creativity has nothing to do with originality and everything to do with culture… You don’t need to reinvent the wheel!'
    },
]

export { navLinks, socialLinks, siteInfo, mediumArticles }