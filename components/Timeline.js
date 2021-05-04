import { format, parse } from "date-fns"

export default function Timeline({ milestones }) {
	return <>

		<ul className="bg-bluegray-50 rounded-3xl p-2 sm:p-5 xl:p-6 dark:bg-bluegray-800">
			{
				milestones.map((m, i) => (
					<li key={"milestone_" + i}>
						<article className="md:hover:bg-white rounded-xl md:dark:hover:bg-bluegray-700">
							<a href={m.link} target={m.link !== "#" ? "_blank" : "_self"} className="grid lg:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden ">
								<h3 className="font-semibold text-gray-900 lg:col-start-3 lg:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 lg:ml-0 dark:text-bluegray-300">
									{m.title}
								</h3>
								<time dateTime={m.date} className="lg:col-start-1 lg:col-span-2 row-start-1 lg:row-end-3 flex items-center font-medium mb-1 lg:mb-0 text-gray-700 dark:text-bluegray-300">
									{i === 0 ? (
										<svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-amber-600">
											<circle cx="6" cy="6" r="6" fill="currentColor"></circle>
											<circle cx="6" cy="6" r="11" fill="none" stroke="currentColor" strokeWidth="2"></circle>
											<path d="M 6 18 V 500" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
										</svg>
									) : i === milestones.length - 1 ? (
										<svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-gray-300">
											<circle cx="6" cy="6" r="6" fill="currentColor"></circle>
											<path d="M 6 -6 V -30" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
										</svg>
									) : (
										<svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-gray-300">
											<circle cx="6" cy="6" r="6" fill="currentColor"></circle>
											<path d="M 6 -6 V -30" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
											<path d="M 6 18 V 500" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
										</svg>
									)}
									{format(parse(m.date, "yyyy-MM-dd", new Date()), "MMM d, yyyy")}
								</time>
								<p className="lg:col-start-3 lg:col-span-6 xl:col-span-7 ml-9 lg:ml-0 text-gray-900 dark:text-bluegray-100">
									{m.description}
								</p>
							</a>
						</article>
					</li>
				))
			}

		</ul>

	</>
}