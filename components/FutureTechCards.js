import TechCards from 'components/TechCards'
import { futureTechs } from 'utils/siteMetadata'

export default function FutureTechCards() {
    return <>
        <TechCards techs={futureTechs} />
    </>
}