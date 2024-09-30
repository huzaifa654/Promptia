'use client';
import { get } from 'mongoose';
import { getProviders, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Nav = () => {
    const IsUserLoggedIn = true;
    const [providers, setProvider] = useState(null)
    const [Toggle, setToggle] = useState(false)
    const setProviders = async () => {
        const response = await getProviders();
        setProvider(response)
    }
    useEffect(() => {
        setProviders()
    }, [])

    return (
        <div className='flex-between w-full mb-16 pt-3'>
            <Link href={'/'} className='flex gap-2 flex-center'>
                <Image src={'/assets/images/logo.svg'}
                    alt='Promptia Logo'
                    width={30}
                    height={30}
                    className='object-cont'
                />
                <p className='logo_text'>Promptia</p>
            </Link>
            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {IsUserLoggedIn ?
                    (
                        <div className='flex gap-3 md:gap-5'>
                            <Link href={'/craete-prompt'} className='black_btn'>Craete Post</Link>
                            <button type='button' className='outline_btn' onClick={signOut}>Sign Out</button>
                            <Link href={'/profile'}>
                                <Image src={'/assets/images/logo.svg'} width={37} height={37} className='rounded-full' alt='profile' />
                            </Link>
                        </div>
                    )
                    :
                    (<>
                        {
                            providers && Object.values(providers).map((provider) => {
                                <button
                                    type='button'
                                    key={provider?.name}
                                    onClick={() => signIn(provider?.id)}
                                    className='black_btn'
                                >Sign In
                                </button>
                            })
                        }
                    </>)
                }
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                {IsUserLoggedIn ?
                    <div className="flex">
                        <Image
                            src={'/assets/images/logo.svg'}
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                            onClick={() => setToggle(!Toggle)}
                        />
                        {Toggle &&
                            <div className="dropdown">
                                <Link
                                    href={'/profile'}
                                    className='dropdown_link'
                                    onClick={() => setToggle(false)}
                                >My Profile</Link>
                                <Link
                                    href={'/craete-prompt'}
                                    className='dropdown_link'
                                    onClick={() => setToggle(false)}
                                >Craete Prompt</Link>
                                <button
                                    type='button'
                                    onClick={() => { setToggle(false); signOut() }}
                                    className='mt-5 w-full black_btn'
                                >
                                    Sign Out
                                </button>
                            </div>
                        }

                    </div>

                    :
                    <>
                        {
                            providers && Object.values(providers).map((provider) => {
                                <button
                                    type='button'
                                    key={provider?.name}
                                    onClick={() => signIn(provider?.id)}
                                    className='black_btn'
                                >Sign In
                                </button>
                            })
                        }</>

                }

            </div>
        </div >
    )
}

export default Nav