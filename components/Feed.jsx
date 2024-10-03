'use client'
import React, { useState } from 'react'

const PromptCardList=({data,handleTagClick})=>{
    return(
        <div className=''>

        </div>
    )
}

const Feed = () => {
    const [SearchText, setSearchText] = useState('')

    const handleSearchText = (e) => {
        setSearchText(e?.target?.value)
    }


    return (
        <section className='mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2'>
            <form className='relative w-full flex-center'>
                <input
                    type="text"
                    placeholder='Search for a tag or a username'
                    value={SearchText}
                    onChange={handleSearchText}
                    required
                    className='w-full drop-shadow-md px-3 py-2 rounded'
                />
            </form>

        </section>
    )
}

export default Feed
