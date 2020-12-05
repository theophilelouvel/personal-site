import MetaHeader from 'components/Social/MetaHeader'
import { siteInfo } from 'utils/siteMetadata'

export default function UsesPage() {

    const pageMeta = {
        title: 'Théophile Louvel Uses...',
        slug: '/uses',
        description: 'Things I use and that make my life easier',
        locale: 'en_US',
        cover: {
            url: '/img/uses.svg',
            alt: 'Théophile Louvel\'s Stuff',
        },
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