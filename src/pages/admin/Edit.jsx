import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editBlogFromDatabase } from '../../actions/blogActions'
import BlogForm from '../BlogForm'
import { removeBlogFromDatabase } from '../../actions/blogActions'

const Edit = () => {
    const {id}=useParams()
    const blogData=useSelector(state=>state.blog)
    const blog=blogData.find((fd)=>fd.id === id )
    const dispatch=useDispatch()
    const navigate=useNavigate()

  return (
      <>
      <h1 className='text-center'>Edit</h1>
   <BlogForm editblog={blog} onBlogSubmit={(fd)=>{
       dispatch(editBlogFromDatabase(blog.id,fd))
       navigate('/dashboard')
       
    }} />
  <div className="delete-btn d-flex justify-content-center">
    <div className="row d-flex justify-content-center" style={{width:'100%'}} >
  <button className='btn btn-danger col-3 mb-2' onClick={()=>{
    dispatch(removeBlogFromDatabase(blog.id))
    navigate('/dashboard')
  }} >Delete</button>
  </div>
  </div>
    </>
  )
}

export default Edit