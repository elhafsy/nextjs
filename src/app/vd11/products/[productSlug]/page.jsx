import React from 'react'

export async function generateMetadata({params}) {
    const { productSlug } = await params;
    return {
        title: productSlug,
        openGraph: {
            images : [
                {}
            ]
        }
    }
}
export default async function ProductSlug({params}) {
    const { productSlug } = await params;
    return (
        <div>
            <h1>vd11 - Product : {productSlug}</h1>
        </div>
    )
}
