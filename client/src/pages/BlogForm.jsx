import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../context'

const BlogForm = (props) => {
   const [brand, setBrand] = useState('')
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [image, setImage] = useState(null)
   const [previousUrl,setPreviousUrl] = useState(null)
   const {setMessage}=useContext(MainContext)
   const navigate = useNavigate()
   useEffect(()=>{
      if (!image) {
         return 
      }
      const fileReader = new FileReader()
      fileReader.onload = () =>{
         setPreviousUrl(fileReader.result)
      }
      fileReader.readAsDataURL(image)
   },[image])
   const pickedHandler = (e) =>{
    if (e.target.files && e.target.files.length === 1) {
      setImage(e.target.files[0])
    }
   }
   const handleSubmit = (e) => {
      e.preventDefault()
      if (!brand || !title || !description) {
         alert('Wrong')
      } else {
         const formdata = new FormData()
         formdata.append('title', title)
         formdata.append('brand', brand)
         formdata.append('description', description)
         formdata.append('img', image)
         props.onBlogSubmit(formdata)
         navigate('/dashboard')
         setMessage('')


      }
   }

   return (
      <>
         <form onSubmit={handleSubmit} className=' container-fluid mt-3 mb-3'>
            <div className="row gap-2 d-flex flex-column align-items-center justify-content-center ">
               <label htmlFor="img" className='text-center'>Image</label>
               { previousUrl ? <img style={{width:'200px',height:'200px' }} src={previousUrl} className='img-fluid border border-dark' alt="" /> : <p className='text-center' > Please pick on image </p>  }
               <input name='img' type="file" className='col-xl-3 border border-dark rounded p-2 ' onChange={(e)=>pickedHandler(e)} />
               <label className='text-center' htmlFor="brand">Brand</label>
               <input name='brand' required value={brand} onChange={(e) => setBrand(e.target.value)} type="text" id='brand' placeholder='Add brand' className=' col-xl-3 rounded' />
               <label htmlFor="title" className='text-center'>Title</label>
               <input name='title' required value={title} onChange={(e) => setTitle(e.target.value)} type="text" id='title' className=' col-xl-3 rounded' placeholder='Add title' />
               <label htmlFor="desc" className='text-center'>Description</label>
               <textarea name='description' style={{ height: "300px" }} required value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Add description' className=' col-xl-3 rounded' id='desc' />
               <button disabled={!brand || !title || !brand  || !description || !image } type='submit' className=' col-3 btn btn-primary'>Submit</button>
            </div>
         </form>


      </>
   )
}

export default BlogForm