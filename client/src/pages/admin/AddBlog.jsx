import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../BlogForm'

const AddBlog = () => {
  const navigate=useNavigate()
  const addBlog = async (data) => {
    await fetch('http://localhost:5000/api/post', {
      method: 'POST',
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(data)
    })
    
  }


  return (
    <>
      <h1 className='text-center'>Add Blog</h1>
      <BlogForm onBlogSubmit={(data) => { addBlog(data) }} />

    </>
  )
}

export default AddBlog