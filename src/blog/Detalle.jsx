import {useEffect,useState} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const URL = 'http://localhost:8000/blogs/'

const DetalleBlog = () => {
  const [titulo,setTitulo] = useState('')
  const[contenido,setContenido] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()

 /*
  const actualizar = async (e)=>{
    e.preventDefault()
    await axios.put(URL+id,{
      titulo:titulo,
      contenido:contenido
    })
    navigate('/')
  }*/
    //metodo para mostrar un dato
    useEffect( ()=>{
      getBlogId()
    },[])

    const getBlogId = async () =>{
     const blog = await axios.get(URL+id)
     setTitulo(blog.data.titulo)
     setContenido(blog.data.contenido)
    }
  return (
    <div>
    <h3>Editar Post</h3>
    <form onSubmit={getBlogId}>
        <div className='mb-3'>
            <label className='form-label'>Titulo</label>
            <input value={titulo} onChange={(e)=>setTitulo(e.target.value)} type="text" className='form-control' />
        </div> 
        <div className='mb-3'>   
            <label className='form-label'>Contenido</label>
            <textarea value={contenido} onChange={(e)=>setContenido(e.target.value)} type="text" className='form-control' />
        </div>
        <Link to='/' className='btn btn-danger'>Regresar</Link>
    </form>
</div>
  )
}

export default DetalleBlog