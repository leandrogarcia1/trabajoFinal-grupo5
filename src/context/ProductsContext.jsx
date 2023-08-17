import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ProductosContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductsContext= ({children}) => {
    
    const [productos, setProductos]=useState()

    const getProductos= async()=> {
        try{
            const response=await axios.get("http://localhost:8080/users")
            console.log(response)
            setProductos(response.data)
            
        }catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getProductos()
    },[])


    return(
        <ProductosContext.Provider value={{productos,
            setProductos}}>
            {children}
        </ProductosContext.Provider>
    )
}

export default ProductsContext