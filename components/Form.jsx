import React from 'react'

const Form = ({
    type,
    post,
    setPost,
    sumbit,
    handleSubmit
}) => {
    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} Post</span>
            </h1>
            <p className='desc text-left max-w-md mt-5'>{type} and share amazing prompts with the world, and let your imgination run wild with any AI-powered platform</p>
            <form
                onSubmit={handleSubmit}
                className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
                    <textarea
                        value={post?.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e?.target?.value })}
                    />
                </label>


            </form>
        </section>
    )
}

export default Form