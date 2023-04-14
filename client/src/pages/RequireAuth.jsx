import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Dashboard from './admin/Dashboard'

const RequireAuth = () => {
    const loggedIn = localStorage.getItem('adminAuth')
    const location = useLocation()
    

  return (
    <>
    {
        loggedIn === 'true' ? <Dashboard/> : <Navigate to='/admin' state={{from:location}} replace />
    }
    </>
  )
}

export default RequireAuth