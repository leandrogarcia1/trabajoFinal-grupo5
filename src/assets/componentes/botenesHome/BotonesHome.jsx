import "./styleBotenesHome.css"
import React from 'react';
import Rutas from "../rutas/Rutas";


const BotonesHome = () => {


    return (
        
        <>
        
        <main className="bodyBotones">
            <section className="home row ">
            <article className='card-home col-md-4'>
              <a href="/almacen">
                <img src="../public/img/almacen.png" alt="" />
              </a>
                <span>Almacen</span>
              </article>

              <article className='card-home col-md-4'>
              <a href="">
                <img src="../public/img/controlinventario.png" alt="" />
              </a>
                <span>Gestion Proveedores</span>
              </article>

              
          
              <article className='card-home'>
              <a href="">
                <img src="../public/img/informes.png" alt="" />
              </a>
              <span>Informe y Analisis</span>
              </article>

              <article className='card-home'>
              <a href="">
                <img src="../public/img/gestionpedidos.png" alt="" />
              </a>
              <span>Pedidos</span>
              </article>

              <article className='card-home '>
              <a href="/users">
                <img src="../public/img/controlusuarios.png" alt="" />
              </a>
              <span>Control Usuarios</span>
              </article>
        
            </section>

        </main>

        
        </>
    );
};

export default BotonesHome;