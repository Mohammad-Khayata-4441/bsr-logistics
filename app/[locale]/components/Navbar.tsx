"use client"
import { Link } from '@/locale/i18n'
import React from 'react'

export default function Navbar() {
    return (
        <header  className='sticky top-0 bg-app-beige'>
            <nav className='py-11 shadow-md'>
            
                <div className='container max-w-screen-xl grid grid-cols-3'>
                    <div className="nav-item">
                        <h3 className='font-bold text-2xl'>BSR Logistics</h3>
                    </div>

                    <div className="nav-item flex justify-center">
                        <ul className='flex gap-8'>
                            <li>
                                <Link className='hover:border-b-2 border-black transition' href='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link className='hover:border-b-2 border-black transition' href='/'>Home</Link>
                            </li>
                            <li>
                                <Link className='hover:border-b-2 border-black transition' href='/portfolio'>Portfolio</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}
