import "./styleBotenesHome.css"
import React from 'react';



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
                <img src="../public/img/venta.png" alt="" />
              </a>
                <span>Ventas</span>
              </article>

             

              <article className='card-home'>
              <a href="">
                <img src="../public/img/gestionpedidos.png" alt="" />
              </a>
              <span>Pedidos</span>
              </article>
          
              <article className='card-home'>
              <a href="">
                <img src="../public/img/informes.png" alt="" />
              </a>
              <span>Informe y Analisis</span>
              </article>

              

             
            </section>

        </main>

        
        </>
    );
};

export default BotonesHome;