import React, { useContext } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBIcon  } from 'mdb-react-ui-kit';
import { UsuariosContext } from '../../context/UserContext';





export default function TablaUsuarios() {

  const{users,setUsers}=useContext(UsuariosContext)

  

  return (
    <>
    <div style={{ overflow: 'auto', width: '100%', maxHeight: '400px' }}>
    <MDBTable align='middle' hover responsive     >
    <MDBTableHead>
        <tr>
          <th scope='col'>Nombre</th>
          <th scope='col'>Puesto</th>
          <th scope='col'>Contraseña</th>
          <th scope='col'>Telefono</th>
          <th scope='col'>Modificar</th>
          <th scope='col'>Eliminar</th>
        </tr>
      </MDBTableHead>
      
         
      <MDBTableBody>
      {users === undefined ? (
            <tr>
            <td colSpan='6'>Cargando...</td>
          </tr> 
          ): (
              users.map((user)=>(
      
        
        <tr key={user.id}>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{user.nombre} {user.apellido}</p>
                <p className='text-muted mb-0'>{user.mail}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{user.role}</p>
            <p className='text-muted mb-0'>Usuario Adm: {user.usuarioAdm}</p>
          </td>
          <td>
          {user.contraseña}
          </td>
          <td>{user.telefono}</td>
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