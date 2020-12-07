import { createRef, useEffect } from 'react'
import { findDOMNode } from 'react-dom'
import highlight from 'highlight.js'

export default function HighlightCode({ children, language }) {
    const code = createRef()

    useEffect(() => {
        highlight.highlightBlock(findDOMNode(code.current))
    }, [])

    return (
        <>
            <code ref={code} className={language + " rounded-lg my-5"}>
                <div className="pl-3 py-3">
                    {children}
                </div>
            </code>
        </>
    )
}
