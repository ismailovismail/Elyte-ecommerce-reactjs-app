import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MainContext } from '../../context'
const Dashboard = () => {

    const { loggoutHandler,message } = useContext(MainContext)
    const navigate = useNavigate()
    const [blogs,setBlogs]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
    
    useEffect(() => {
        
        document.title = 'Dashboard'
        const getData = async ()=>{
            setIsLoading(true)
            try {
                const response = await fetch('http://localhost:5000/api/get')
                if (!response.ok) {
                    throw new Error('Failed')
                }
                setBlogs( await response.json() )
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        } 
        getData()

        setTimeout(() => {
            document.querySelector('.alert').style.display='none'
        }, 5000);
    }, [])

    
    if (isLoading) {
        return <h1 className='text-center' >Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
  
    return (
        <>
            <div className="container-fluid">
                <h1 className='fs-2 mb-2'>Blogs Admin Panel</h1>
                <Link to='/addblog' className='btn btn-white'>Add blog</Link>
                <button className='mx-2 btn btn-outline-dark' onClick={() => {
                    loggoutHandler()
                    navigate('/')
                }} >Logout</button>
                {message && message}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Img</th>
                            <th scope="col">Brand</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Edit</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            blogs ? (blogs?.map((item, i) => {
                                return <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item?.id}</td>
                                    <td><img width={50} height={50} src={`http://localhost:5000/images/${item?.img}`} alt={item?.title} /></td>
                                    <td>{item?.brand}</td>
                                    <td>{item?.title}</td>
                                    <td style={{ width: "50%" }} >{item?.description.substr(0,250)}...</td>
                                    <td><Link className='btn btn-primary' to={`/edit/${item?.id}`} >Edit</Link></td>
                                </tr>


                            })
                            ): <h1>Loading...</h1>
                    


                        }
                       

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard