import { socialLinks } from 'utils/siteMetadata'

export default function SocialIcons() {
  return (
    <div className="flex flex-row justify-center md:justify-between px-7 mt-4 text-gray-900 pb-20 md:pb-0">
      {socialLinks.map(({ name, href, icon }) => (
        <a key={name} href={href} target="_blank" className="mx-3">
          {icon}
        </a>
      ))}
    </div>
  )
}