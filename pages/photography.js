import Layout from 'components/Layout'
import Image from 'next/image'
import { getAllImages } from 'lib/db-admin'

export async function getStaticProps() {
    const { images } = await getAllImages('Theophile Louvel')

    if (!images) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            images
        },
        revalidate: 60
    }
}

export default function PhotographyPage({ images }) {
    return (
        <Layout>
            <div className="flex justify-center items-center h-screen -mt-24 md:-mt-2">
                {images &&
                    images.map(image => (

                        <div key={image.id} className="object-contain">
                            <Image
                                src={image.url}
                                alt={image.alt}
                                width={1110}
                                height={600}
                            />
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}