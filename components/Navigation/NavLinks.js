import Link from 'next/link'
import { useRouter } from 'next/router'
import { navLinks } from 'utils/siteMetadata'

export default function Navigation({ handleToggle }) {

    const router = useRouter()

    return (
        <div className="flex flex-col md:h-full mx-4 mt-4 md:mt-6 overflow-y-auto">

            {navLinks.map(({ href, label }) => (
                <div key={`${href}${label}`} className=" mt-2 md:mt-4 w-screen md:w-full">
                    <Link href={href}>
                        <a onClick={handleToggle} className={router.asPath === href ? "btn-nav md:text-amber-600" : "btn-nav md:hover:text-amber-600"}>
                            ::{label}::
                            {/* &#60;{label} /&#62; */}
                        </a>
                    </Link>
                </div>
            ))}

        </div >
    )
}

// Animation: md:transform md:hover:scale-95 md:transition duration-300