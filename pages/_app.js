import 'styles/index.css'
import 'highlight.js/styles/nord.css'
import "nprogress/nprogress.css"
import 'tippy.js/dist/tippy.css'

import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
    () => {
        return import("components/Navigation/TopProgressBar");
    },
    { ssr: false },
);

function MyApp({ Component, pageProps }) {
    return <>
        <TopProgressBar />
        <Component {...pageProps} />
    </>
}

export default MyApp
