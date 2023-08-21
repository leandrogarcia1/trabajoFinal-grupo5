
import BotonHomeAdm from "../../componentes/botones/BotonHomeAdm"
import Header from "../../componentes/header/Header"
import AddProducto from "../../componentes/tablaAlmacen/AddProducto"


import TablaAlmacenAdm from "../../componentes/tablaAlmacen/TablaAlmacenAdm"






function AlmacenAdm() {
  

    return (
      <>
      
      <Header/>
      <BotonHomeAdm/>
      <h1 className="m-4 text-center font-weight-bold">Agregar Nuevo Producto:</h1>
      <AddProducto/>
      <h1 className="m-4 text-center font-weight-bold">Almacen:</h1>
      <TablaAlmacenAdm/>
      
      
      
      
        
      </>
    )
  }
  
  export default AlmacenAdm