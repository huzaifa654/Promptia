'use client'
import React, { useEffect, useState } from 'react'
import Profile from "../../components/Profile"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const MyProfile = () => {
    const { data: session } = useSession();
    const [Posts, setPosts] = useState([])
    const router = useRouter()

    const handleEdit = async (id) => {
        router.push(`/update-prompt?id=${id}`)
    }

    const handleDelete = async (id) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?");
        if (hasConfirmed) {
            try {
                await fetch(`api/prompt/${id}`, {
                    method: `DELETE`
                })
                const filterData = Posts?.filter((p) => p?._id !== id)
                setPosts(filterData)
            } catch (error) {
                console.log("error------", error)
            }

        }
    }
    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user?.id}/posts`);
        const data = await response.json();
        console.log("response---------", response)
        setPosts(data)
    }
    useEffect(() => {
        session?.user?.id && fetchPosts();
    }, [session?.user?.id])
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
