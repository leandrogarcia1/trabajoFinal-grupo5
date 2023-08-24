import BotonHome from "../../componentes/botones/BotonHome";
import Header from "../../componentes/header/Header";

import TablaAlmacenAdm from "../../componentes/tablaAlmacen/TablaAlmacenAdm";
import AddProducto from "../../componentes/tablaAlmacen/AddProducto";

const usuarioLogueado = JSON.parse(localStorage.getItem("user"));

function Almacen() {
  return (
    <>
      {usuarioLogueado.usuarioAdm.toLowerCase() === "si" ? (
        <>
          <>
            <Header />
            <BotonHome />
            <h1 className="m-4 text-center font-weight-bold">
              Agregar Nuevo Producto:
            </h1>
            <AddProducto />
            <h1 className="m-4 text-center font-weight-bold">Almacen:</h1>
            <TablaAlmacenAdm />
          </>
        </>
      ) : (
        <>
          <Header />
          <BotonHome />
          <h1 className="m-4 text-center font-weight-bold">Almacen:</h1>
          <TablaAlmacenAdm />
        </>
      )}
    </>
  );
}

export default Almacen;
