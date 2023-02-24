import React, { useEffect, useRef } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authData from '../data/authData'
import { MainContext } from '../context'
const Authentication = () => {
    const login=useRef()
    const password=useRef()
    const [emptyValue,setEmptyValue]=useState(false)
    const [isValid,setIsValid]=useState(true)
    const navigate=useNavigate()
    const {setLoggedIn}=useContext(MainContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if ( login.current.value.trim() === '' ) {
            setEmptyValue(true)
            return
            
        }
        if (password.current.value.trim() === '') {
            setEmptyValue(true)
            return
        }
        if (login.current.value.toLowerCase().trim() === authData.login  && password.current.value.toLowerCase().trim() === authData.password ) {
            navigate('/dashboard')
            setLoggedIn(true)
            

        }else{
            setIsValid(false)
        }

    }
    useEffect(()=>{
        document.title='Admin'
    },[])
  return (
    <>
       <section className='auth-sec' >
        <div style={{width:"95%",height:"100%"}} className="container-fluid">
        <div style={{height:"100%"}} className="row d-flex justify-content-center align-items-center ">
            <div className="login-pw bg-white p-3 col-xl-4 rounded"  >
                <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center gap-3' >
                    <h1 className='text-center fs-3' > <i className='fa-solid fa-user text-primary' ></i> Admin</h1>
                    <input ref={login}  type="text" placeholder='Login' className='p-1 rounded '   />
                    <input ref={password}   type="password" name="" placeholder='Password' className='p-1 rounded'  id="" />
                    <button className='btn btn-primary' >Submit</button>
                    {emptyValue && <h1 className='text-danger' >Empty blanks</h1> }
                     {!emptyValue && !isValid && <h1 className='text-danger'>Form is not valid</h1> }
                </form>
            </div>
            </div>
            </div>
       </section>   
    </>
  )
}

export default Authentication