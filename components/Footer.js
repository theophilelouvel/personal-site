import { FiTwitter, FiYoutube, FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
    return (
        <>
            <div className="flex flex-row justify-center">
                <a className="mx-3" href="https://twitter.com/theophilelouvel" target="_blank"><FiTwitter /></a>
                <a className="mx-3" href="https://www.youtube.com/channel/UCco896WsL_UlJeOecstyRAA" target="_blank"><FiYoutube /></a>
                <a className="mx-3" href="https://github.com/theophilelouvel" target="_blank"><FiGithub /></a>
                <a className="mx-3" href="https://www.linkedin.com/theophilelouvel" target="_blank"><FiLinkedin /></a>
                <a className="mx-3" href="mailto:louveltheophile@gmail.com" target="_blank"><FiMail /></a>
            </div>
            <p className="text-center mt-3">Built with Next.js + Tailwind CSS 2.0</p>
        </>
    )
}