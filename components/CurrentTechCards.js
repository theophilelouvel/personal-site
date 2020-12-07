import TechCards from 'components/TechCards'
import { currentTechs } from 'utils/siteMetadata'

export default function CurrentTechCards() {
    return <>
        <TechCards techs={currentTechs} />
    </>
}