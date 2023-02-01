import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlogToDatabase } from '../../actions/blogActions'
import BlogForm from '../BlogForm'

const AddBlog = () => {
    const dispatch=useDispatch()
   
    const navigate=useNavigate()

  return (
    <>
    <h1 className='text-center'>Add Blog</h1>
    <BlogForm onBlogSubmit={(fd)=>{
      dispatch(addBlogToDatabase(fd))
      navigate('/dashboard')
    }} />
    
    </>
  )
}

export default AddBlog