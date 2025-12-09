import React from 'react'

export default async function Blog({params}) {
    const {blogId} = await params;
    return (
        <div>
            <h1>Blog ID: {blogId}</h1>
        </div>
    )
}
