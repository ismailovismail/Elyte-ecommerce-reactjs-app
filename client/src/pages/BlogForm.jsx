import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BlogForm = (props) => {
   const navigate = useNavigate()
   const [brand, setBrand] = useState(props.editblog ? props.editblog.brand : '')
   const [title, setTitle] = useState(props.editblog ? props.editblog.title : '')
   const [description, setDescription] = useState(props.editblog ? props.editblog.description : '')
   const [image, setImage] = useState(props.editblog ? props.editblog.img : '')
   const handleSubmit = (e) => {
      e.preventDefault()
      if (!brand || !title || !description) {
         alert('Wrong')
      } else {
         navigate('/dashboard')
         props.onBlogSubmit({
            brand: brand,
            title: title,
            description: description,
            img: image
         })
         window.location.reload(true)
      }
   }
   return (
      <>
         <form onSubmit={handleSubmit} className='mt-3 mb-3'>
            <div className="row gap-2 d-flex flex-column align-items-center justify-content-center ">
               <label htmlFor="img" className='text-center'>Image</label>
               <input value={image} id='img' type="text" className=' col-xl-3 rounded' onChange={(e) => setImage(e.target.value)} placeholder='Add image' />
               <label className='text-center' htmlFor="brand">Brand</label>
               <input required value={brand} onChange={(e) => setBrand(e.target.value)} type="text" id='brand' placeholder='Add brand' className=' col-xl-3 rounded' />
               <label htmlFor="title" className='text-center'>Title</label>
               <input required value={title} onChange={(e) => setTitle(e.target.value)} type="text" id='title' className=' col-xl-3 rounded' placeholder='Add title' />
               <label htmlFor="desc" className='text-center'>Description</label>
               <textarea style={{ height: "300px" }} required value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Add description' className=' col-xl-3 rounded' id='desc' />
               <button type='submit' className=' col-3 btn btn-primary'>Submit</button>
            </div>
         </form>


      </>
   )
}

export default BlogForm