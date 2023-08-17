
import React, { useContext } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { ProductosContext } from '../../context/ProductsContext';

export default function TablaAlmacenAdm() {
  
const{productos,setProductos}=useContext(ProductosContext)

  const [datatable, setDatatable] = React.useState({
    columns: [
        {
            label: 'Foto',
            field: 'img', // El campo debe coincidir con el campo 'field' de las filas
            width: 100,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Photo',
            },
            sort: 'disabled',
            // Agregar 'cell' para renderizar la imagen en la celda
            cell: (row) => <img src={row.img} alt="Producto" style={{ width: '50px', height: 'auto' }} />,
          },
      {
        label: 'Producto',
        field: 'producto',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Deposito',
        field: 'deposito',
        width: 270,
      },
      {
        label: 'Stock Minimo',
        field: 'stockMinimo',
        width: 100,
      },
      {
        label: 'Categoria',
        field: 'categoria',
        width: 100,
      },
      {
        label: 'Stock',
        field: 'stock',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Fecha Control Stock',
        field: 'fechaControl',
        sort: 'disabled',
        width: 100,
      },
      
      {
        label: 'Precio Por Unidad',
        field: 'precio',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Nota',
        field: 'nota',
        sort: 'disabled',
        width: 200,
      },
    ],
    rows: [
      {
        img:"https://picsum.photos/200/300",
        producto: 'Tiger Nixon',
        deposito: 'System Architect',
        stockMinimo: 'Edinburgh',
        categoria: "Computadora",
        stock: '61',
        fechaControl: '2011/04/25',
        precio: '$320',
        nota: "no hay ningun comentario",
      },
      
    ],
  });

  return <MDBDataTableV5 hover responsive
  scrollX scrollY maxHeight='50vh' data={datatable} />;
}