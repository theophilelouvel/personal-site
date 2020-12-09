import dynamic from 'next/dynamic'

const components = {
    TechCards: dynamic(() => import('components/TechCards')),
}

export default components