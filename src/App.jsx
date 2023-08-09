
import './App.css'

import Footer from './assets/componentes/footer/Footer'
import Header from './assets/componentes/header/Header'
import { BrowserRouter } from 'react-router-dom';




import Rutas from './assets/componentes/rutas/Rutas'

function App() {
  

  return (
    <>
    <BrowserRouter>
    
    <Rutas/>
    
    
      <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
