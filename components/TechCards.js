export default function TechCards({ techs }) {

    return <>

        <div className="flex flex-wrap justify-left">

            {techs &&
                techs.map(({ name, src, href }) => (
                    <a key={name} href={href} target="_blank">
                        <div className="flex flex-col items-center justify-center h-28 w-24 md:h-32 md:w-28 flex-shrink-0 rounded-lg m-2 py-2 focus:outline-none shadow-md hover:shadow-lg dark:bg-bluegray-300">
                            <div className="divide-y divide-gray-900 divide-opacity-20">
                                <img
                                    className="flex-shrink h-14 w-14 md:h-16 md:w-16 my-3 mx-auto"
                                    src={src}
                                    alt={src.replace(/\.[^.]*$/, '').slice(src.lastIndexOf('/') + 1)}
                                    width={70}
                                    height={70}
                                />
                                <div className="py-1 w-full text-center text-sm text-gray-900">
                                    {name}
                                </div>
                            </div>
                        </div>
                    </a>
                ))
            }
        </div>

    </>
}
