export default function TechCards({ techs }) {
    return <>
        <div className="flex flex-wrap justify-center">
            {techs &&
                techs.map(({ name, src, href }) => (
                    <div className="flex flex-col justify-around items-center h-28 w-24 md:h-32 md:w-28 flex-shrink-0 rounded-lg m-2 py-2 px-4 focus:outline-none shadow-md hover:shadow-lg">
                        <a href={href} target="_blank" className="divide-y divide-gray-900 divide-opacity-20">
                            <div className="my-3">
                                <img
                                    className="flex-shrink h-14 w-14 md:h-16 md:w-16"
                                    src={src}
                                    alt="nextjs"
                                />

                            </div>
                            <div className="py-1 w-full text-center text-sm">
                                {name}
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    </>
}
