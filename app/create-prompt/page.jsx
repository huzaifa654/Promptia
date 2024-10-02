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