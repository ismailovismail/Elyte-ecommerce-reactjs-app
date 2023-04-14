import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authData from '../data/authData'
import { MainContext } from '../context'
const Authentication = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(true)
    const navigate = useNavigate()
    const { loggedHandler } = useContext(MainContext)
    const handleSubmit = (e) => {
        e.preventDefault()

        if (login.toLowerCase().trim() === authData.login && password.toLowerCase().trim() === authData.password) {
            navigate('/dashboard')
            loggedHandler()


        } else {
            setIsValid(false)
        }

    }
    useEffect(() => {
        document.title = 'Admin'

    }, [])
    return (
        <>
            <section className='auth-sec' >
                <div style={{ width: "95%", height: "100%" }} className="container-fluid">
                    <div style={{ height: "100%" }} className="row d-flex justify-content-center align-items-center ">
                        <div className="login-pw bg-white p-3 col-sm-9 col-md-7 col-lg-6 col-xl-3 rounded"  >
                            <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center gap-3' >
                                <h1 className='text-center fs-3' > <i className='fa-solid fa-user text-primary' ></i> Admin</h1>
                                <input type="text" onChange={(e) => { setLogin(e.target.value) }} placeholder='Login' className={`p-1 rounded form-control ${!isValid && 'is-invalid'} `} />
                                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' className={`p-1 rounded form-control ${!isValid && 'is-invalid' } `} id="" />
                                <button disabled={!login || !password} className='submit btn btn-primary' >Login</button>
                                {!isValid && <h1 className='text-danger'>Username or password is in-valid</h1>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Authentication