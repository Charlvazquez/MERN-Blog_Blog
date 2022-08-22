import axios from 'axios'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:8000/blogs/'

const CompShowBlogs = () =>{
    const [blogs,setBlog] = useState([])
    useEffect(()=>{
        getBlogs()
    },[])

    //metodo para mostrar todos los blogs
    const getBlogs = async ()=>{
      const res = await axios.get(URL)
      setBlog(res.data)
    }

    const borrarBlog = async (id) =>{
       const borrar = await axios.delete(`${URL}${id}`)
        getBlogs()

    }

    return(
        <div className='container'>
            <div className="row">
                <div className="col">
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog) => (
                                <tr key={ blog.id}>
                                    <td> { blog.titulo } </td>
                                    <td> { blog.contenido } </td>
                                    <td>
                                        <Link to='/crear' className='btn btn-success'><i className="fas fa-plus"></i></Link>
                                        <Link to={`/detalle/${blog.id}`} className='btn btn-primary'><i className="fas fa-eye"></i></Link>
                                        <Link to={`/editar/${blog.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>borrarBlog(blog.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlogs