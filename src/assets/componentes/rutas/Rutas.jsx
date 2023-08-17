import { Routes, Route } from "react-router-dom";
import Login from "../../paginas/login/Login";
import UsuarioControl from "../../paginas/usuariosControl/UsuariosControl";
import NewUsuario from "../../paginas/usuariosControl/NewUsuario"

import Nosotros from "../../paginas/nosotros/Nosotros";
import Home from "../../paginas/home/Home"
import Almacen from "../../paginas/almacen/Almacen";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={< Login/>} />
      
      
      <Route path="/users" element={<UsuarioControl />} />
      <Route path="/newusers" element={<NewUsuario />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/home" element={<Home />} />
      <Route path="/almacen" element={<Almacen/>} />


    </Routes>
  );
};

export default Rutas;