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

    const postUsuario= async(user)=> {
        try{
            const response=await axios.post("http://localhost:8080/users",user)
            console.log(response)
            setProductos([...users, response.data]);
            
        }catch (error){
            console.log(error)
        }
    }
    const deleteUsuario = async (id) => {
        console.log(id, "deleteUsuario")
        try {
          await axios.delete(`http://localhost:8080/users/${id}`);
          
        } catch (error) {
          console.log(error);
        }
      };

      const updateUser = async (user) => {
        
        try {
          await axios.put(
            `http://localhost:8080/users/${user.id}`,
            user
          );
          await getUsers()
          
          
        } catch (error) {
          console.log(error);
        }
      };



    const logout = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
      };

    useEffect(()=>{
        getUsers()
    },[])


    return(
        <UsuariosContext.Provider value={{users,setUsers,logout,deleteUsuario,postUsuario,updateUser}}>
            {children}
        </UsuariosContext.Provider>
    )
}

export default UserContext