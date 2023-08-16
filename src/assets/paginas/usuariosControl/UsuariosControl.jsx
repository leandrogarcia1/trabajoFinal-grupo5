
import { useContext } from "react"
import Header from "../../componentes/header/Header"
import BotonNuevoUsuario from "../../componentes/nuevoUsuario/BotonNuevoUsuario"
import TablaUsuarios from "../../componentes/tablaUsuarios/TablaUsuarios"
import { UsuariosContext } from "../../context/UserContext"


function UsuarioControl() {
  
  const {user}=useContext(UsuariosContext)
 
    return (
      <>
      
      <Header/>
      <h3>Bienvenido {user}</h3>
      <h1 className="m-4 text-center font-weight-bold">Control de Usuarios:</h1>
      <BotonNuevoUsuario/>
      <TablaUsuarios/>
      
      
        
      </>
    )
  }
  
  export default UsuarioControl