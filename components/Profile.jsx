'use c'
import React from 'react'
import PromoptCard from './PromoptCard'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>
      <div className='prompt_layout'>
        {data.map((post) => (
          <PromoptCard
            key={post?._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post?._id)}
            handleDelete={() => handleDelete && handleDelete(post?._id)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile