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
    await fetch(`http://localhost:5000/api/update/${id}`, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        brand: brand,
        img: image,
        description: description

      })
    })
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
          <input value={image} onChange={(e) => { setImage(e.target.value) }} id='img' type="text" className=' col-xl-3 rounded' placeholder='Add image' />
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