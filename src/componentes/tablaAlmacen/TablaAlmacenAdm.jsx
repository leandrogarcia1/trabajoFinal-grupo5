
import React, { useContext } from 'react';
//import { MDBDataTableV5 } from 'mdbreact';
import { ProductosContext } from '../../context/ProductsContext';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBIcon  } from 'mdb-react-ui-kit';



export default function TablaAlmacenAdm() {
  
const{productos,setProductos}=useContext(ProductosContext)


return (
  <>
  <div style={{ overflow: 'auto', width: '100%', maxHeight: '400px' }}>
  <MDBTable align='middle' hover responsive     >
  <MDBTableHead>
      <tr>
        <th scope='col'>Producto</th>
        <th scope='col'>Deposito</th>
        <th scope='col'>Stock Minimo</th>
        <th scope='col'>Categoria</th>
        <th scope='col'>stock</th>
        <th scope='col'>Fecha de Control Stock</th>
        <th scope='col'>Precio</th>
        <th scope='col'>Nota</th>
        <th scope='col'>Editar</th>
        <th scope='col'>Eliminar</th>

      </tr>
    </MDBTableHead>
    
       
    <MDBTableBody>
    {productos === undefined ? (
          <tr>
          <td colSpan='6'>Cargando...</td>
        </tr> 
        ): (
            productos.map((producto)=>(
    
      
      <tr key={producto.id}>
        <td>
          <div className='d-flex align-items-center'>
            <img
              src={producto.img}
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>{producto.producto} </p>
              
            </div>
          </div>
        </td>
        <td>
        <p className='text-muted mb-0'>{producto.deposito}</p>
          
        </td>
        <td>
          <p className='fw-normal mb-1'>{producto.stockMinimo}</p>
          
        </td>
        <td>
        {producto.categoria}
        </td>
        <td>
        {producto.stock}
        </td>
        <td>{producto.fechaControl}</td>
        <td>
          <p className='fw-normal mb-1'>$ {producto.precio}</p>
          
        </td>
        <td>
          <p className='fw-normal mb-1'>{producto.nota}</p>
          
        </td>
        <td>
          <MDBBtn color='link' rounded size='sm'>
          Edit
          </MDBBtn>
          
        </td>
        <td>
          <MDBBtn color='link' rounded size='sm'>
          <MDBIcon fas icon="trash" />
          </MDBBtn>
        </td>
      </tr>
      ))
      )}
  </MDBTableBody>
  </MDBTable>
  </div>
  </>
      
);
}