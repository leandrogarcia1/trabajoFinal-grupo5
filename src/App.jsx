
import './App.css'

import Footer from './assets/componentes/footer/Footer'
import Header from './assets/componentes/header/Header'
import { BrowserRouter } from 'react-router-dom';




import Rutas from './assets/componentes/rutas/Rutas'
import UserContext, { UsuariosContext } from './assets/context/UserContext';


function App() {
 

  return (
    <>
<<<<<<< HEAD
    <UserContext>
      <BrowserRouter>
      
      <Rutas/>
      
      
        <Footer/>
      </BrowserRouter>
    </UserContext>
    
   
=======
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> origin/nosotros-contacto-Yonathan
    </>
  )
}

export default App
