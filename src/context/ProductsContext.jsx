import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ProductosContext = createContext()



// eslint-disable-next-line react/prop-types
const ProductsContext= ({children}) => {
    
    const [productos, setProductos]=useState()

    const getProductos= async()=> {
        try{
            const response=await axios.get("http://localhost:8080/productos")
            console.log(response)
            setProductos(response.data)
            
        }catch (error){
            console.log(error)
        }
    }

    const postProducto= async(producto)=> {
        try{
            const response=await axios.post("http://localhost:8080/productos",producto)
            console.log(response)
            setProductos([...productos, response.data]);
            
        }catch (error){
            console.log(error)
        }
    }

    const deleteProducto = async (id) => {
        console.log(id, "deleteProducto")
        try {
          await axios.delete(`http://localhost:8080/productos/${id}`);
          
        } catch (error) {
          console.log(error);
        }
      };
    
      const updateProducto = async (producto) => {
        
        try {
          await axios.put(
            `http://localhost:8080/productos/${producto.id}`,
            producto
          );
          await getProductos()
          
          
        } catch (error) {
          console.log(error);
        }
      };


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