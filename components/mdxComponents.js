import CustomLink from 'components/CustomLink'
import dynamic from 'next/dynamic'

const components = {
    a: CustomLink,
    h2: ({ className, ...props }) => (
        <h2 className="medium-title">{props.children}</h2>
    ),
    p: ({ className, ...props }) => (
        <p className="my-5">{props.children}</p>
    ),
    TechCards: dynamic(() => import('components/TechCards')),
}

export default components