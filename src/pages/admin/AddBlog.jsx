import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlogToDatabase } from '../../actions/blogActions'
import { MainContext } from '../../context'
import BlogForm from '../BlogForm'

const AddBlog = () => {
    const dispatch=useDispatch()
   
    const navigate=useNavigate()
    const {setLoggedIn}=useContext(MainContext)
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