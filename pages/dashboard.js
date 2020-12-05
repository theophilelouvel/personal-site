import MetaHeader from 'components/Social/MetaHeader'
import { siteInfo } from 'utils/siteMetadata'

export default function Projects() {
  const pageMeta = {
    // The title of the page in the tab
    title: 'Dashboard',
    path: 'dashboard',
    cover: {
      url: '/img/cover-dashboard.png',
      alt: `${siteInfo.author}'s dashboard`
    },
    description: `${siteInfo.author}'s dashboard`
  }
  return <>
    <MetaHeader pageMeta={pageMeta} />
    <h1 className="big-title">Coming soon!</h1>
  </>
}