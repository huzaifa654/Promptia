'use client';
import React, { useState } from 'react'
import Form from "../../components/Form"

const CreatePromopt = () => {
    const [sumbit, setSumbit] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const createPrompt = async (e) => {
        e?.preventDefault();
        setSumbit(true);
        try {
            
        } catch (error) {
            
        }


    }
    return (
        <Form
            type={"Create"}
            post={post}
            setPost={setPost}
            sumbit={sumbit}
            handleSubmit={createPrompt}
        />
    )
}

export default CreatePromopt