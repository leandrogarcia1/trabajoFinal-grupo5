
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'

import Footer from './assets/componentes/footer/Footer'
import Header from './assets/componentes/header/Header'
import { BrowserRouter } from 'react-router-dom';




import Rutas from './assets/componentes/rutas/Rutas'
import UserContext, { UsuariosContext } from './assets/context/UserContext';


function App() {
 

  return (
    <>
    <UserContext>
      <BrowserRouter>
      
      <Rutas/>
      
      
        <Footer/>
      </BrowserRouter>
    </UserContext>
    
   
    
    </>
  )
}

export default App
