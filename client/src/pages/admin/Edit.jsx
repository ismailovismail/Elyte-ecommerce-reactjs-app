import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MainContext } from '../../context'
const Edit = () => {
  const { id } = useParams()
  const { blogs } = useContext(MainContext)
  const navigate = useNavigate()
  let blogData = blogs?.find((item) => item?.id === id);
  const [image, setImage] = useState(blogData?.img || 'Loading...')
  const [brand, setBrand] = useState(blogData?.brand || 'Loading...')
  const [title, setTitle] = useState(blogData?.title || 'Loading...')
  const [description, setDescription] = useState(blogData?.description || 'Loading...')
  const [blogId,setBlogId]=useState(null)
  useEffect(() => {
    const getBlog = async () => {
      const response = await fetch(`http://localhost:5000/api/get/${id}`)
      const data = await response.json()
      setImage(data[0]?.img)
      setBrand(data[0]?.brand)
      setTitle(data[0]?.title)
      setDescription(data[0]?.description)
    }
    getBlog()
  }, [id])
  const updateBlogList = async (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('title',title)
    formdata.append('brand',brand)
    formdata.append('description',description)
    formdata.append('img',image)
    const config={
      headers:{
        "Content-type":"multipart/form-data"
      }
    }
    await axios.put(`http://localhost:5000/api/update/${id}`,formdata,config)
    navigate('/dashboard')

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
      <form onSubmit={updateBlogList} className='mt-3 mb-3'>
        <div className="row gap-2 d-flex flex-column align-items-center justify-content-center ">
          <label htmlFor="img" className='text-center'>Image</label>
          <input type="hidden" name="id" value={blogId} onChange={(e)=>setBlogId(e.target.id)} />
          <input type="hidden" name='img' value={image} onChange={(e)=>setImage(e.target.value)}   />
          <img style={{width:'200px',height:"200px"}} src={`http://localhost:5000/images/${image}`} alt="Loading..." />
          <input className='border border-dark rounded p-2 col-xl-3' onChange={(e)=>setImage(e.target.files[0])} type="file" name="img" id="" />
          <label className='text-center' htmlFor="brand">Brand</label>
          <input required value={brand} onChange={(e) => setBrand(e.target.value)} type="text" id='brand' placeholder='Add brand' className=' col-xl-3 rounded' />
          <label htmlFor="title" className='text-center'>Title</label>
          <input required value={title} onChange={(e) => setTitle(e.target.value)} type="text" id='title' className=' col-xl-3 rounded' placeholder='Add title' />
          <label htmlFor="desc" className='text-center'>Description</label>
          <textarea style={{ height: "300px" }} required value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Add description' className=' col-xl-3 rounded' id='desc' />
          <button type='submit' className=' col-3 btn btn-primary'>Submit</button>
        </div>
      </form>
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