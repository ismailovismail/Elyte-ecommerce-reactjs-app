import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BlogForm from '../BlogForm'
import { MainContext } from '../../context'

const Edit = () => {
  const { id } = useParams()
  const { blogs } = useContext(MainContext)
  const navigate = useNavigate()
  const data = blogs.find((item) => item?.id == id)
  console.log(data);
  const updateBlogList = async (blog) => {
    await fetch(`http://localhost:5000/api/update/${id}`, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(blog)
    })
  }
  const deleteBlogList = async () => {
    await fetch(`http://localhost:5000/api/remove/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
  }
  return (
    <>
      <h1 className='text-center'>Edit</h1>
      <BlogForm editblog={data} onBlogSubmit={(blog) => { updateBlogList(blog) }} />
      <div className="delete-btn d-flex justify-content-center">
        <div className="row d-flex justify-content-center" style={{ width: '100%' }} >
          <button className='btn btn-danger col-3 mb-2' onClick={() => {
            if (window.confirm('Are you sure ?') === true) {
              deleteBlogList()
              navigate('/dashboard')
              
            }
          }} >Delete</button>
        </div>
      </div>
    </>
  )
}

export default Edit