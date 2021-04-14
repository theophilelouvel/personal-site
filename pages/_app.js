import 'styles/index.css'
import 'highlight.js/styles/nord.css'
import "nprogress/nprogress.css"
import 'tippy.js/dist/tippy.css'

import dynamic from 'next/dynamic'

import { ThemeProvider } from 'next-themes';

const TopProgressBar = dynamic(
    () => {
        return import("components/Navigation/TopProgressBar");
    },
    { ssr: false },
);

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <TopProgressBar />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
