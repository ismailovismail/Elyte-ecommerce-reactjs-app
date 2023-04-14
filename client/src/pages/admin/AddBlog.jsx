import React, { useCallback } from 'react'
import BlogForm from '../BlogForm'
import axios from 'axios'


const AddBlog = () => {
  
  const handleSubmit = useCallback(async (data) => {
    const config = {
      headers: {
        "Content-type": "multipart/form-data"
      }
    }
    await axios.post('http://localhost:5000/api/post', data, config)
    
  },[])
  return (
    <>
      <h1 className='text-center'>Add Blog</h1>
      <BlogForm onBlogSubmit={(data) => handleSubmit(data)} />

    </>
  )
}

export default React.memo(AddBlog)