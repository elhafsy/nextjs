import React from 'react'

export default async function Proudct({params, searchParams}) {
    const {categoryName, productId} = await params;
    const { ref } = await searchParams;
    return (
        <div>
            <h1>Category: {categoryName}</h1>
            <h2>Product ID: {productId}</h2>
            {ref && <h3>Referred by: {ref}</h3>}
        </div>
    )
}
