import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlogToDatabase } from '../../actions/blogActions'
import BlogForm from '../BlogForm'

const AddBlog = () => {
    const dispatch=useDispatch()
    const state=useSelector(state=>state.blog)
   
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