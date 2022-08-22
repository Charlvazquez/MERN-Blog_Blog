
import './App.css';
import CompShowBlogs from './blog/Registros';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Editar from './blog/Editar';
import CompCrearBlog from './blog/CrearBlog';
import DetalleBlog from './blog/Detalle';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={ <CompShowBlogs />} />
          <Route path="/editar/:id" element={ <Editar />} />
          <Route path="/crear" element={ <CompCrearBlog />} />
          <Route path='/detalle/:id' element={<DetalleBlog />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
