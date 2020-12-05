import HighlightCode from 'components/HighlightCode'
import PostLink from 'components/Post/PostLink'
import dynamic from 'next/dynamic'

const components = {
    a: PostLink,
    h2: ({ className, ...props }) => (
        <h2 className="medium-title">{props.children}</h2>
    ),
    p: ({ className, ...props }) => (
        <p className="my-5">{props.children}</p>
    ),
    code: ({ className, ...props }) => (
        <HighlightCode language={className}>
            {props.children}
        </HighlightCode>
    )
    // TestComponent: dynamic(() => import('components/TestComponent')),
}

export default components