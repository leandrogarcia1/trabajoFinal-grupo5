import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'     <App />
//import Contacto from './assets/componentes/formContacto/FormContacto.jsx' <Contacto />
import QuienesSomos from './assets/paginas/nosotros/Nosotros.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QuienesSomos />

  </React.StrictMode>,
)
