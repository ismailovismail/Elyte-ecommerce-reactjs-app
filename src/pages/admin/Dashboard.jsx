import React from 'react'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
const Dashboard = () => {
    const data = useSelector(state => state.blog)


  
    return (
        <>  
           <div className="container-fluid">
            <h1 className='fs-2 mb-2'>Blogs Admin Panel</h1>
            <a href={'/'} className='btn btn-white'> Switch Home</a>
            <Link to='/addblog' className='btn btn-white'>Add blog</Link>
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
                        data && ( data.map((fd,i) => {
                            if ( typeof fd === 'undefined'  ) {
                                return <img width={80} src='https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif' alt="" />
                            }else{
                            return <tr>
                                  <th scope="row">{i+1}</th>
                                  <td>{fd.id}</td>
                                  <td><img width={50} height={50} src={fd.img} alt={fd.title} /></td>
                                  <td>{fd.brand}</td>
                                  <td>{fd.title}</td>
                                  <td style={{width:"50%"}} >{fd.text}</td>
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