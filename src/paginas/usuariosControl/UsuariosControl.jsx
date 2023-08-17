
import { useContext } from "react"
import BotonNuevoUsuario from "../../componentes/nuevoUsuario/BotonNuevoUsuario"
import TablaUsuarios from "../../componentes/tablaUsuarios/TablaUsuarios"
import { UsuariosContext } from "../../context/UserContext"
import HeaderAdm from "../../componentes/header/HeaderAdm"
import BotonHomeAdm from "../../componentes/botones/BotonHomeAdm"


function UsuarioControl() {
  
  const {user}=useContext(UsuariosContext)
 
    return (
      <>
      
      <HeaderAdm/>
      <BotonHomeAdm/>
      <h3>Bienvenido {user}</h3>
      <h1 className="m-4 text-center font-weight-bold">Control de Usuarios:</h1>
      <BotonNuevoUsuario/>
      <TablaUsuarios/>
      
      
        
      </>
    )
  }
  
  export default UsuarioControl