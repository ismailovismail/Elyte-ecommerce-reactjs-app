import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { MainContext } from '../../context'
const Dashboard = () => {
    const data = useSelector(state => state.blog)
    const { loggoutHandler } = useContext(MainContext)
    const navigate = useNavigate()
    useEffect(() => {
        document.title = 'Dashboard'
    }, [])


    return (
        <>
            <div className="container-fluid">
                <h1 className='fs-2 mb-2'>Blogs Admin Panel</h1>
                <Link to='/addblog' className='btn btn-white'>Add blog</Link>
                <button className='mx-2 btn btn-outline-dark' onClick={() => {
                    loggoutHandler()
                    navigate('/')
                }} >Logout</button>
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
                            data && (data.map((fd, i) => {
                                if (typeof fd === "undefined") {
                                    return <h1>Loading...</h1>
                                } else {
                                    return <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{fd.id}</td>
                                        <td><img width={50} height={50} src={fd.img} alt={fd.title} /></td>
                                        <td>{fd.brand}</td>
                                        <td>{fd.title}</td>
                                        <td style={{ width: "50%" }} >{fd.text.slice(0, 200)}...</td>
                                        <td><Link className='btn btn-primary' to={`/edit/${fd.id}`} >Edit</Link></td>
                                    </tr>

                                }
                            })
                            )


                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard