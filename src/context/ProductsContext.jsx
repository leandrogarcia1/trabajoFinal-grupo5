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
          const newProductos = productos.filter((producto) => producto._id !== id);
          setProductos(newProductos);
        } catch (error) {
          console.log(error);
        }
      };
    
      const updateProducto = async (updatedProduct) => {
        console.log(updatedProduct, "updateProducto")
        try {
          await axios.put(
            `http://localhost:8080/productos/${updatedProduct._id}`,
            updatedProduct
          );
          const newProductos = productos.map((producto) =>
            producto._id === updatedProduct._id ? updatedProduct : producto
          );
          setProductos(newProductos);
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