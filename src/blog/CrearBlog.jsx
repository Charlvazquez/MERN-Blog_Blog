import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const URL = 'http://localhost:8000/blogs/'

const CompCrearBlog = ()=>{
    const [titulo, setTitulo] = useState('')
    const [contenido, setContenido] = useState('')
    const navigate = useNavigate()

    const almacenar = async(e) =>{
        e.preventDefault()
        await axios.post(URL,{titulo: titulo, contenido: contenido})
        navigate('/')
    }
    return(
        <div>
            <h3>Crea un Post</h3>
            <form onSubmit={almacenar}>
                <div className='mb-3'>
                    <label className='form-label'>Titulo</label>
                    <input value={titulo} onChange={(e)=>setTitulo(e.target.value)} type="text" className='form-control' />
                </div> 
                <div className='mb-3'>   
                    <label className='form-label'>Contenido</label>
                    <textarea value={contenido} onChange={(e)=>setContenido(e.target.value)} type="text" className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
                <Link to='/' className='btn btn-danger'>Regresar</Link>
            </form>
        </div>
    )
}

export default CompCrearBlog