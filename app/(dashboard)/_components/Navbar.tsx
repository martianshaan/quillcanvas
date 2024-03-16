"use client"

import { UserButton } from '@clerk/nextjs'
import React from 'react'

export const Navbar = () => {
    return (
        <div className='bg-green-500 flex items-center gap-x-4 p-5 '>
            Navbar
            <div className='hidden lg:flex lg:flex-1 '>
                {/* Todo:Add search */}
            </div>
            <UserButton />
        </div>
    )
}
