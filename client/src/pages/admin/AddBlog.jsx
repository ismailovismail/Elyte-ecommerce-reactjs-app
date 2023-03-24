import React from 'react'
import BlogForm from '../BlogForm'

const AddBlog = () => {
  const addBlog = async (data) => {
    const response = await fetch('http://localhost:5000/api/post', {
      method: 'POST',
      headers:{"Content-type":"application/json"},
      body: JSON.stringify(data)
    })
    console.log(await response.json());
  }


  return (
    <>
      <h1 className='text-center'>Add Blog</h1>
      <BlogForm onBlogSubmit={(data) => { addBlog(data) }} />

    </>
  )
}

export default AddBlog