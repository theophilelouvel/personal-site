import { useEffect } from 'react'
import { FiTwitter, FiDownload, FiLinkedin, FiMail, FiLink, FiFacebook } from "react-icons/fi"
import Tippy from '@tippyjs/react'
import copyToClipboard from 'utils/copyToClipboard'
import { siteInfo } from "utils/siteMetadata"

// Documentation: https://www.npmjs.com/package/react-share
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, } from "react-share";


export default function PostSharing({ slug, title }) {

    const iconStyles = "text-coolgray-700"
    const iconSize = 20
    const iconWrapper = "mr-8 focus:outline-none"

    const postURL = siteInfo.url + '/blog/' + slug

    useEffect(() => {

        document.querySelector(`#copy-button`).addEventListener('click', (e) => {
            e.preventDefault()
            copyToClipboard(postURL)
        })

        return () => document.querySelector(`#copy-button`).removeEventListener('click', (e) => { })

    }, [])

    return <>
        <div className="flex items-baseline">

            {/* <Tippy content="Still under development..." trigger={"click"}>
                <button className={iconWrapper}>
                    <FiDownload size={iconSize} className={iconStyles} />
                </button>
            </Tippy> */}

            <TwitterShareButton
                via={siteInfo.twitter.author}
                title={title}
                url={postURL}
                hashtags={['javascript', 'webdevelopment']}
                className={iconWrapper}
            >
                <FiTwitter size={iconSize} className={iconStyles} />
            </TwitterShareButton>

            <FacebookShareButton
                quote={title}
                url={postURL}
                className={iconWrapper}
            >
                <FiFacebook size={iconSize} className={iconStyles} />
            </FacebookShareButton>

            <LinkedinShareButton
                title={title}
                url={postURL}
                className={iconWrapper}
            >
                <FiLinkedin size={iconSize} className={iconStyles} />
            </LinkedinShareButton>

            <EmailShareButton
                quote={title}
                url={postURL}
                hashtag={'#' + 'javascript'}
                className={iconWrapper}
            >
                <FiMail size={iconSize} className={iconStyles} />
            </EmailShareButton>

            <Tippy content="Copied ❤" trigger={"click"}>
                <button id="copy-button" className="cursor-pointer focus:outline-none">
                    <FiLink size={iconSize} className={iconStyles} />
                </button>
            </Tippy>

        </div>
    </>
}