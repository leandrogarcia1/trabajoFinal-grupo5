
import BotonHomeAdm from "../../componentes/botones/BotonHomeAdm"
import HeaderAdm from "../../componentes/header/HeaderAdm"

import TablaAlmacen3 from "../../componentes/tablaAlmacen/TablaAlmacen3"






function AlmacenAdm() {
  

    return (
      <>
      
      <HeaderAdm/>
      <BotonHomeAdm/>
      <h1 className="m-4 text-center font-weight-bold">Almacen:</h1>
      <TablaAlmacen3/>
      
      
      
      
        
      </>
    )
  }
  
  export default AlmacenAdm