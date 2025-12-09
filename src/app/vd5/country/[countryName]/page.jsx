import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({params}) {
    const {countryName} = await params;
    if( countryName.toLowerCase() === 'israel') {
        notFound();
    }
    return (
        <div>
            <h1>Country : {countryName} </h1>
        </div>
  )
}
