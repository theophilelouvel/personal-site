import 'styles/index.css'
import 'highlight.js/styles/stackoverflow-light.css'
import "nprogress/nprogress.css"
import 'tippy.js/dist/tippy.css'

import dynamic from 'next/dynamic'
import Layout from 'components/Layout'

const TopProgressBar = dynamic(
    () => {
        return import("components/Navigation/TopProgressBar");
    },
    { ssr: false },
);

function MyApp({ Component, pageProps }) {
    return <>
        <TopProgressBar />
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
}

export default MyApp
