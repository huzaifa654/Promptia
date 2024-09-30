'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Nav = () => {
    return (
        <div className='flex-between w-full mb-16 pt-3'>
            <Link href={'/'}>
                <Image src={'/assets/images/logo.svg'}
                    alt='Promptia Logo'
                    width={30}
                    height={30}
                    className='object-contain'
                />
            </Link>
        </div>
    )
}

export default Nav