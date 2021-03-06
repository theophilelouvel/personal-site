import 'tailwind.css'
import 'highlight.js/styles/nord.css'
import "nprogress/nprogress.css"
import 'tippy.js/dist/tippy.css'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes';
import Layout from 'components/Layout'

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
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider >
    )
}

export default MyApp
