import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Col, Container, Row } from 'react-bootstrap';



export default function AddProducto() {

  const[productos, setProductos]=useState({
    
        img:"https://picsum.photos/200/300",
        producto: "",
        deposito: "",
        stockMinimo: "",
        categoria:  "",
        stock: "",
        fechaControl: "",
        precio: "",
        nota: "",
      
  })
  const handleChange = (e)=>{
    setProductos({...productos,[e.target.name]: e.target.value}) //actualizo el estaco con el valor del input
  }



  const handleSudmit = (e)=> {
    e.preventDefault()
    try{
      const response =axios.post(" http://localhost:8080/productos",productos)
      console.log(response)
      setProductos({
        img:"https://picsum.photos/200/300",
        producto: "",
        deposito: "",
        stockMinimo: "",
        categoria:  "",
        stock: "",
        fechaControl: "",
        precio: "",
        nota: "",
      })
    }catch(error){
      console.log(error)
    }
  }//envio los datos a mi fake api


  return (
    <>
    <Container>
      <Row>
      

        <Col md='6' className='mx-auto text-center'>
        
                <form onSubmit={handleSudmit}>
                <MDBInput wrapperClass='mb-4' value={productos.producto} onChange={handleChange} name='producto' label='Producto' />
            <MDBRow className='mb-4'>
                <MDBCol>
                <MDBInput  value={productos.img} onChange={handleChange} name='img'  label='URL Imagen Producto' />
                </MDBCol>
                <MDBCol>
                <MDBInput value={productos.stock} onChange={handleChange} name='stock' label='N de Stock' />
                </MDBCol>
                <MDBCol>
                <MDBInput  value={productos.stockMinimo} onChange={handleChange} name='stockMinimo'  label='Stock Minimo' />
                </MDBCol>
            </MDBRow>

            
            
            <MDBRow className='mb-4'>
                <MDBCol>
                <MDBInput  value={productos.categoria} onChange={handleChange} name='categoria'  label='Categoria' />
                </MDBCol>
                <MDBCol>
                <MDBInput value={productos.fechaControl} onChange={handleChange} name='fechaControl' label='Fecha de Control' />
                </MDBCol>
                <MDBCol>
                <MDBInput  value={productos.precio} onChange={handleChange} name='precio'   label='Precio' />
                </MDBCol>
            </MDBRow>
            <MDBInput wrapperClass='mb-4 '  value={productos.nota} onChange={handleChange}  name='nota' rows={4} label='Informacion Adicional' />
            
            <MDBBtn  className='mb-4' type='submit' block>
                Agregar Nuevo Producto
            </MDBBtn>
            </form>
        
        </Col>
        
        
      </Row>
    </Container>
    </>
    
  );
}