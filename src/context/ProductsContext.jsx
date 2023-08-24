import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ProductosContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductsContext= ({children}) => {
    
    const [productos, setProductos]=useState()

    const getProductos= async()=> {
        try{
            const response=await axios.get("http://localhost:8081/api/productos")
            console.log(response)
            setProductos(response.data)
            
        }catch (error){
            console.log(error)
        }
    }

    const postProducto= async(producto)=> {
        try{
            const response=await axios.post("http://localhost:8081/api/productos",producto)
            console.log(response)
            setProductos([...productos, response.data]);
            
        }catch (error){
            console.log(error)
        }
    }

    const deleteProducto = async (_id) => {
        
        try {
          await axios.delete(`http://localhost:8081/api/productos/${_id}`);
          window.location.reload()
          
        } catch (error) {
          console.log(error);
        }
      };
    
      const updateProducto = async (updatedProducto) => {
        console.log(updatedProducto, "updateProducto")
        try {
          await axios.put(
            `http://localhost:8081/api/productos/${updatedProducto._id}`,
            updatedProducto
          );
          const newProductos = productos.map((producto) =>
            producto._id === updatedProducto._id ? updatedProducto : producto
          );
          setProductos(newProductos);
          window.location.reload()
        } catch (error) {
          console.log(error);
        }
      };



      /*
      const updateProducto = async (producto) => {
        
        try {
          await axios.put(
            `http://localhost:8081/api/productos/${_id}`,
            producto
          );
          await getProductos()
          
          
        } catch (error) {
          console.log(error);
        }
      };
*/

    useEffect(()=>{
        getProductos()
    },[])

    console.log(productos,"---desde context")
    return(
        <ProductosContext.Provider value={{productos,
            setProductos,
            postProducto,
            deleteProducto,
            updateProducto,}}>
            {children}
        </ProductosContext.Provider>
    )
}

export default ProductsContext