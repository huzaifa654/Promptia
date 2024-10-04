'use client'
import React, { useEffect, useState } from 'react'
import Profile from "../../components/Profile"
import { useSession } from 'next-auth/react'


const MyProfile = () => {
    const { data: session } = useSession();
    const [Posts, setPosts] = useState([])
    console.log("Posts-----------", Posts)
    const handleEdit = () => {

    }
    const handleDelete = () => {

    }
    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user?.id}/posts`);
        const data = await response.json();
        console.log("response---------", response)
        setPosts(data)
    }
    useEffect(() => {
        session?.user?.id && fetchPosts();
    }, [])
    return (
        <Profile
            name={"My"}
            desc={"Welcome to your personalized profile page"}
            data={Posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}

        />
    )
}
export default MyProfile
