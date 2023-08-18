import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const UsuariosContext = createContext()

// eslint-disable-next-line react/prop-types
const UserContext= ({children}) => {
    
    const [users,setUsers]=useState()

    const getUsers= async()=> {
        try{
            const response=await axios.get("http://localhost:8080/users")
            console.log(response)
            setUsers(response.data)
            
        }catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getUsers()
    },[])


    return(
        <UsuariosContext.Provider value={{users,setUsers}}>
            {children}
        </UsuariosContext.Provider>
    )
}

export default UserContext