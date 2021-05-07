import Link from 'next/link'
import { useRouter } from 'next/router'
import { navLinks } from 'utils/siteMetadata'

export default function Navigation({ handleToggle }) {

	const router = useRouter()
	return (
		<div className="flex flex-col md:h-full mx-4 mt-4 md:mt-6">

			{navLinks.map(({ href, label }) => (
				<div key={`${href}${label}`} className=" mt-2 md:mt-4">
					<Link href={href}>
						<a onClick={handleToggle} className="btn-nav md:hover:text-amber-600 dark:text-amber-600 md:dark:text-bluegray-300 click-bounce">
							{label}
						</a>
					</Link>
				</div>
			))}

		</div >
	)
}

// Animation: md:transform md:hover:scale-95 md:transition duration-300