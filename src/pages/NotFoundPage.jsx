import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  useEffect(()=>{
    document.title='404 | Elyte Ecommerce'
  },[])
  return (
    <section className='py-5'>
        <div style={{width:"95%"}} className="container-fluid">
    <h1 className='text-center fs-1 fw-bold' >404</h1>
    <div className="row d-flex justify-content-center flex-column align-items-center gap-2">
    <p className='text-center fs-5 col-xl-5 lh-base'>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>
    <a href={'/'} className='btn btn-dark col-xl-2'>GO TO HOME</a>
    </div>
    </div>
    </section>
  )
}

export default NotFoundPage