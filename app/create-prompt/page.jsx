'use client'; // Add this at the top

import React, { useState } from 'react';
import Form from "../../components/Form";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";

const CreatePrompt = () => {
    const [sumbit, setSumbit] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();

    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });

    const PromptCardList=({data,handleClick})=>{
        return(
            <div className='mt-16 prompt_layout'>
                {data.map((post)=>{

                })}
            </div>
        )

    }

    const createPrompt = async (e) => {
        e?.preventDefault();
        setSumbit(true);

        console.log("prompt:", post.prompt,
            " tag:", post.tag,
            "userId:", session?.user?.id,)
        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    userId: session?.user?.id,
                }),
            });

            console.log("respnse-------", response)
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
            type={"Create"}
            post={post}
            setPost={setPost}
            sumbit={sumbit}
            handleSubmit={createPrompt}
        />
    );
};

export default CreatePrompt;
