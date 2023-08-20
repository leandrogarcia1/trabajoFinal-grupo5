import { Routes, Route } from "react-router-dom";
import Login from "../../paginas/login/Login";
import UsuarioControl from "../../paginas/usuariosControl/UsuariosControl";
import NewUsuario from "../../paginas/usuariosControl/NewUsuario"

import Nosotros from "../../paginas/nosotros/Nosotros";
import Home from "../../paginas/home/Home"
import HomeAdm from "../../paginas/home/HomeAdm"
import Almacen from "../../paginas/almacen/Almacen";
import AlmacenAdm from "../../paginas/almacen/AlmacenAdm";


const usuarioLogueado=JSON.parse(localStorage.getItem("user"))


const Rutas = () => {
  return (
    <Routes>
      {usuarioLogueado ? (
        <>
         <Route path="/users" element={<UsuarioControl />} />
         <Route path="/newusers" element={<NewUsuario />} />      
         <Route path="/home" element={<Home />} />
         <Route path="/homeadm" element={<HomeAdm />} />
         <Route path="/almacen" element={<Almacen/>} />
         <Route path="/almacenadm" element={<AlmacenAdm/>} />
         
      <Route path="/nosotros" element={<Nosotros />} />
        </>
        
      ):(
        <>
         <Route path="/" element={< Login/>} />
      <Route path="/nosotros" element={<Nosotros />} />
        </>
       
      )
     
    
    }
      
      
      
      

      


    </Routes>
  );
};

export default Rutas;