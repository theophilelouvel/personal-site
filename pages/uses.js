import MetaHeader from 'components/Social/MetaHeader'
import { siteInfo } from 'utils/siteMetadata'

export default function UsesPage() {
  const pageMeta = {
    // The title of the page in the tab
    title: 'Uses...',
    path: 'uses',
    cover: {
      url: '/img/cover-uses.png',
      alt: `${siteInfo.author} uses...`
    },
    description: `${siteInfo.author} uses...`
  }
  return <>
    <MetaHeader pageMeta={pageMeta} />
    <div>
      <h1 className="big-title">
        Coming soon!
      </h1>
    </div>
  </>

}