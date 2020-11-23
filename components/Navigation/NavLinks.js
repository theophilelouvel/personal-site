import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { href: '/', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  // { href: '/dashboard', label: 'Dashboard' },
  { href: '/photography', label: 'Photography' },
  { href: '/about', label: 'About' },
  { href: '/uses', label: 'Uses' }
]

export default function Navigation() {
  const router = useRouter()
  return (
    <nav className="block h-screen md:h-full w-screen md:w-full px-4 mt-0 md:mt-6 overflow-y-auto">
      <ul className="md:divide-y-0">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`} className="mt-2 md:mt-4 flex flex-col md:block">
            <Link href={href}>
              <a className={router.pathname === href ? "mt-4 mx-2 md:mx-0 btn-nav-active" : "mt-4 mx-2 md:mx-0 btn-nav hover-opacity"}>
                {label}
                {/* &#60;{label} /&#62; */}
              </a>
            </Link>
          </li>
        ))}
      </ul>

    </nav >
  )
}