'use client'; // Add this at the top

import React, { useEffect, useState } from 'react';
import Form from "../../components/Form";
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from "next/navigation";

const UpdatePrompt = () => {
    const [sumbit, setSumbit] = useState(false);
    const searchParams = useSearchParams()
    const promptId = searchParams?.get('id')
    const router = useRouter();
    console.log("promptId--------", promptId)

    const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt/${promptId}`)
        const data = await response.json();

        setPost({
            prompt: data?.prompt,
            tag: data?.tag
        })
    }
    useEffect(() => {
        promptId && getPromptDetails()
    }, [promptId])

    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });


    const updatePrompt = async (e) => {
        e?.preventDefault();
        setSumbit(true);
        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                }),
            });

            if (response?.ok) {
                router?.push('/');
            }

        } catch (error) {
            console.log(error);
        } finally {
            setSumbit(false);
        }
    };

    return (
        <Form
            type={"Edit"}
            post={post}
            setPost={setPost}
            sumbit={sumbit}
            handleSubmit={updatePrompt}
        />
    );
};

export default UpdatePrompt;
