import React from 'react'
import { ToastContainer } from 'react-toastify'
import AppRouter from './routers/AppRouter'

const App = () => {
  return (
    <>
    <ToastContainer position='bottom-right' />
     <AppRouter/>
     
    </>
  )
}

export default App
