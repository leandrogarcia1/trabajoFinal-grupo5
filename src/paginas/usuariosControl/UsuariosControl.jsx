
import { useContext } from "react"
import { UsuariosContext } from "../../context/UserContext" 
import BotonNuevoUsuario from "../../componentes/nuevoUsuario/BotonNuevoUsuario"
import TablaUsuarios from "../../componentes/tablaUsuarios/TablaUsuarios"

import HeaderAdm from "../../componentes/header/HeaderAdm"
import BotonHomeAdm from "../../componentes/botones/BotonHomeAdm"


function UsuarioControl() {
  
  const {users}=useContext(UsuariosContext)
 
    return (
      <>
      
      <HeaderAdm/>
      <BotonHomeAdm/>
      <h3>Bienvenido </h3>
      <h1 className="m-4 text-center font-weight-bold">Control de Usuarios:</h1>
      <BotonNuevoUsuario/>
      <TablaUsuarios/>
      
      
        
      </>
    )
  }
  
  export default UsuarioControl