import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={
                        {
                            pathname: '/vd6/about',
                            query:  {
                                q : 13
                            }
                        }
                    }>
                        About 
                    </Link>
                </li>
                <li><Link href="/vd6/home?q=13">home </Link></li>

                <li><Link href="/vd6/blog/1">Blog 1</Link></li>
                <li><Link href="/vd6/blog/12">Blog 2</Link></li>
            </ul>
        </nav>
    )
}
