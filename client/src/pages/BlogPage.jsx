import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainContext } from '../context'

const BlogPage = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const {mode}=useContext(MainContext)
  const [data,setData]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [error,setError]=useState(null)
  useEffect(() => {
     const getData = async()=>{
      setIsLoading(true)
       try {
        const response = await fetch(`http://localhost:5000/api/get/${id}`)
        if (!response.ok) {
          throw new Error('Failed')
        }
       setData( await response.json() )
       } catch (error) {
         setError(error.message)
       }
       setIsLoading(false)
     }
     getData()
    document.title = `${data[0]?.brand} | Elyte Ecommerce `
    
  },[data[0]?.brand,id])
  const blogData=data[0]
  if (isLoading) {
    return <h1 className='text-center' >Loading...</h1>
  }
  if (error) {
    return <h1 className='text-center' >{error}</h1>
  }
  return (
    <>
         
    {
      blogData &&
      <div>
      <div className="image blog-page-img d-flex justify-content-center">
  <img className='img-fluid' src={blogData?.img} alt="" />
</div>
<div className="title d-flex flex-column gap-2 mt-2">
  <h1 className={`fw-bold text-secondary text-center ${mode === 'dark' ? "text-white" : ""} `} >{blogData?.brand}</h1>
  <h5 className={`text-center ${mode === 'dark' ? "text-white" : ""} `}>{blogData?.title}</h5>
</div>
<div className="blog-desc">
  <p className={`${mode === 'dark' ? "text-white" : ""}`}>
    {blogData?.description}
  </p>
</div>
      </div> 
    }
     
     
      <div className="tags-blog mt-3 mb-3">

        <ul className='d-flex gap-2 '>
          <li>
            <Link className='btn btn-light text-secondary'>Android</Link>
          </li>
          <li>
            <Link className='btn btn-light text-secondary'>Ios</Link>
          </li>
          <li>
            <Link className='btn btn-light text-secondary'>Blog</Link>
          </li>
          <li>
            <Link className='btn btn-light text-secondary'>Engineer</Link>
          </li>
          <li>
            <Link className='btn btn-light text-secondary'>Gadget</Link>
          </li>
          <li>
            <Link className='btn btn-light text-secondary'>Mobile</Link>
          </li>
          <li>
            <Link className='btn btn-light text-secondary' >News</Link>
          </li>
          <li>
            <Link className='btn btn-light text-secondary'>Raspberrypi</Link>
          </li>
          <li>
            <Link className='btn btn-light text-secondary'>Robot</Link>
          </li>
          <li>
            <Link className='btn btn-light text-secondary'>Smartphone</Link>
          </li>
          <li>
            <Link className='btn btn-light text-secondary'>Techie</Link>
          </li>
        </ul>

      </div>
      <div className="social-links mt-3 mb-3 ">
        <ul className='d-flex gap-2' >
          <li>
            <Link className='btn p-0 fb-link'>Facebook</Link>
          </li>
          <li>
            <Link className='btn p-0 tw-link'>Twitter</Link>
          </li>
          <li>
            <Link className='btn p-0 pn-link' >Pinterest</Link>
          </li>
        </ul>
      </div>

      <div className="comment-part mt-3">
        <div className="comment-title">
          <div className="line"></div>
          <h2 className={`fw-bold text-secondary ${mode === 'dark' ? "text-white" : ""} `}>{t('blog.commentitle')}</h2>
        </div>
        <div className="blog-comment-form mt-2 mb-2">

          <form className='d-flex gap-2 flex-column' >
            <label htmlFor="" className={`fw-bold text-secondary ${mode === 'dark' ? "text-white" : ""} `}>{t('blog.name')}*</label>
            <input required className='rounded p-1' type="text" placeholder={t("blog.name")} />
            <label htmlFor="" className={`fw-bold text-secondary ${mode === 'dark' ? "text-white" : ""} `} >Email*</label>
            <input required type="text" placeholder='Email' className='rounded p-1' />
            <label htmlFor="" className={`fw-bold text-secondary ${mode === 'dark' ? "text-white" : ""}  `} >{t('blog.message')}*</label>
            <textarea required name="" placeholder={t('blog.message')} className='rounded p-1' id="" cols="30" rows="10"></textarea>
            <button className='btn btn-dark'>{t('blog.post')}</button>
          </form>

        </div>

      </div>
    </>
  )
}

export default BlogPage