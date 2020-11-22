import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/photography', label: 'Photography' },
  { href: '/about', label: 'About' },
  { href: '/uses', label: 'Uses' }
]

export default function Navigation() {
  return (
    <div className="block h-screen md:h-full w-screen md:w-full px-4 mt-0 md:mt-6">
      <ul className="divide-y md:divide-y-0">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`} className="mt-2 md:mt-4 flex flex-col md:block">
            <Link href={href}>
              <a className="mt-4 mx-2 md:mx-0 btn-nav hover-opacity">
                {/* <a className="text-center md:text-left block px-4 py-2 mt-4 mx-2 md:mx-0 text-xl md:text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 md:dark-mode:hover:bg-gray-600 md:dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline hover-opacity"> */}
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div >
  )
}
