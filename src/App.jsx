
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'

import Footer from './componentes/footer/Footer'

import { BrowserRouter } from 'react-router-dom';




import Rutas from './componentes/rutas/Rutas'
import UserContext, { UsuariosContext } from './context/UserContext';


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
