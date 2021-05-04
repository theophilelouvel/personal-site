// import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteInfo } from 'utils/siteMetadata'
// import Tippy from '@tippyjs/react'

export default function Social() {

	// const [isPlaying, setIsPlaying] = useState(false)

	// const playAudio = () => {
	//     const pronunciation = document.getElementById(siteInfo.twitter)
	//     if (isPlaying) {
	//         pronunciation.pause()
	//         pronunciation.currentTime = 0
	//     } else {
	//         pronunciation.play()
	//     }
	// }

	return (
		<div>
			<div className="hidden md:flex mt-16 justify-center mb-5">
				<Link href="/"><a>
					<div className="bg-gradient-to-br from-orange-500 to-orange-600 w-40 h-40 rounded-full flex flex-col text-center justify-center items-center">
						<div className="bg-white dark:bg-bluegray-900 w-32 h-32 rounded-full flex flex-col text-center justify-center items-center">
							<Image
								src="/img/avatar.jpg"
								alt="Théo Louvel's Portrait"
								className="w-28 rounded-full"
								width={100}
								height={100}
							/>
						</div>
					</div>
				</a></Link>
			</div>
			<div className="flex flex-col text-center">
				<h1 className="font-bold text-2xl text-gray-700 dark:text-bluegray-300">{siteInfo.author}</h1>
				<p className="text-sm font-normal px-2 text-gray-900 dark:text-bluegray-300 mt-4">Human / Computer Translator</p>
				{/* <Tippy content="Click me 🔊">
                    <button className="focus:outline-none" onClick={playAudio}>
                    <div className="font-base text-xl text-gray-900 pt-1 dark:text-bluegray-300">\{siteInfo.pronunciation}\</div>
                    <audio id={siteInfo.twitter} src="/pronunciation.mp3"></audio>
                    </button>
                </Tippy> */}
			</div>
		</div>
	)
}
