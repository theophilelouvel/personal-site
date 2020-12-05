import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteInfo } from 'utils/siteMetadata'
import Tippy from '@tippyjs/react'

export default function Social() {

    // const [isPlaying, setIsPlaying] = useState(false)

    // const playAudio = () => {
    //     const pronunciation = document.getElementById(siteInfo.twitter)
    //     isPlaying ? (pronunciation.pause(), pronunciation.currentTime = 0) : pronunciation.play()
    //     setIsPlaying(!isPlaying)
    // }

    return (
        <div>
            <div className="hidden md:flex mt-16 justify-center mb-5">
                <Link href="/"><a>
                    <Image
                        src="/img/avatar.jpg"
                        alt="Théophile Louvel's Portrait"
                        className="w-36 rounded-full"
                        width={100}
                        height={100}
                    />
                </a></Link>
            </div>
            <div className="flex flex-col text-center">
                <div className="font-bold text-2xl text-gray-900">{siteInfo.author}</div>
                {/* <Tippy content="Click me 🔊"> */}
                {/* <button className="focus:outline-none" onClick={playAudio}> */}
                <div className="font-base text-xl text-gray-900 pt-1">\{siteInfo.pronunciation}\</div>
                {/* <audio id={siteInfo.twitter} src="/pronunciation.mp3"></audio> */}
                {/* </button> */}
                {/* </Tippy> */}
            </div>
        </div>
    )
}
