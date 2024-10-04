'use client'
import React, { useEffect, useState } from 'react'
import PromoptCard from '../components/PromoptCard'

const PromptCardList = ({ data, handleTagClick }) => {
    console.log("PromptCardList data========", data)
    return (
        <div className='prompt_layout'>
            {data.map((post) => (
                <PromoptCard
                    key={post?._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [SearchText, setSearchText] = useState('');
    const [Posts, setPosts] = useState([]);
    const handleSearchText = (e) => {
        setSearchText(e?.target?.value)
    }

    const fetchPosts = async () => {
        const response = await fetch('/api/prompt');
        const data = await response.json();
        console.log("data---------", data)
        setPosts(data)
    }
    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <section className='mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2 mb-5'>
            <form className='relative w-full flex-center border-none '>
                <input
                    type="text"
                    placeholder='Search for a tag or a username'
                    value={SearchText}
                    onChange={handleSearchText}
                    required
                    className='w-full drop-shadow-md px-3 py-2 rounded outline-none	'
                />
            </form>
            <PromptCardList
                data={Posts}
                handleTagClick={() => { handleSearchText() }}
            />
        </section>
    )
}

export default Feed
