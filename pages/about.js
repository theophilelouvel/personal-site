import MetaHeader from 'components/Social/MetaHeader'
import { siteInfo } from 'utils/siteMetadata'

export default function About() {
  const pageMeta = {
    // The title of the page in the tab
    title: 'About',
    path: 'about',
    cover: {
      url: '/img/cover-about.png',
      alt: `${siteInfo.title} - About`
    },
    description: siteInfo.description
  }
  return <>
    <MetaHeader pageMeta={pageMeta} />
    <h1 className="big-title">
      Coming soon!
    </h1>
  </>
}