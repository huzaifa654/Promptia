'use client'
import React, { useState } from 'react'

const Feed = () => {
    const [SearchText, setSearchText] = useState()
    const handleSearchText=(e)=>{
        setSearchText(e?.target?.value)
    }
    return (
       <section className='feed'>
        <form  className='relative w-full flex-center'>
            <input 
            type="text"
            placeholder='Search for a tag or a username'
            value={SearchText}
            onChange={handleSearchText}
            required
            className='search_input_peer'
            />
        </form>

       </section>
    )
}

export default Feed
