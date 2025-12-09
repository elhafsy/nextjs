import React from 'react'

export default async function CategoryName({params}) {
    const {categoryName} = await params;
    return (
        <div>
            <h1>Category: {categoryName}</h1>
        </div>
    )
}
