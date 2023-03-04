import React from 'react'
import { useDispatch } from 'react-redux'
import { addBlogToDatabase } from '../../actions/blogActions'
import BlogForm from '../BlogForm'

const AddBlog = () => {
  const dispatch = useDispatch()


  return (
    <>
      <h1 className='text-center'>Add Blog</h1>
      <BlogForm onBlogSubmit={(fd) => {
        dispatch(addBlogToDatabase(fd))


      }} />

    </>
  )
}

export default AddBlog