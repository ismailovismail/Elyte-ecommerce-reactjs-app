import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../context'
import loginData from '../data/loginData'

const Login = () => {
    const {userLogin,setUserLogin,loginHandler}=useContext(MainContext)
    const [userPassword,setUserPassword]=useState('')
    const [isEmpty,setIsEmpty]=useState(false)
    const [isValid,setIsValid]=useState(true)
    const navigate=useNavigate()
    const {t}=useTranslation()
    useEffect(()=>{
        document.title='Login | Elyte Ecommerce '
    },[])
    const submitHandler=(e)=>{
        e.preventDefault()
        if (!userLogin || !userPassword ) {
            setIsEmpty(true)
            
        }

        if (userLogin.trim() !== loginData.user && userPassword.trim() !==loginData.password  ) {
            setIsValid(false)
            
        }

        if (userLogin.trim() === loginData.user && userPassword.trim() === loginData.password ) {
            localStorage.setItem('userName',userLogin)
            setUserLogin(localStorage.getItem('userName'))
             navigate('/')
             loginHandler()
        }

    }
  return (
    <section className='login-section d-flex gap-3 flex-column justify-content-center'>
        <div style={{width:"96%"}} className="container-fluid">
       <div className="title mb-3">
        <h1 className='text-center fs-1'>{t('loginData.login')}</h1>
       </div>
       <div className="login-form d-flex flex-column">
            <form onSubmit={submitHandler} action="">
            <div className="row gap-2 d-flex flex-column justify-content-center align-items-center ">
            <input onChange={(e)=>{setUserLogin(e.target.value)}} className=' col-sm-9 col-md-7 col-lg-6 col-xl-3 rounded p-2' type="text" placeholder={t('loginData.username')} />
            <input onChange={(e)=>{setUserPassword(e.target.value)}} className=' col-sm-9 col-md-7 col-lg-6 col-xl-3 rounded p-2' type="password" placeholder={t('loginData.password')} name="" id="" />
            <button className=' col-sm-9 col-md-7 col-lg-6 col-xl-3 btn btn-primary' >{t('loginData.login')}</button>
            {
                isEmpty && <h1 className='text-center text-danger' >Empty blanks</h1>
            }
            {
              !isValid && <h1 className='text-center text-danger' >is Not Valid</h1>
            }
            
            </div>
            </form>
    
       </div>
       </div>
    </section>
  )
}

export default Login