import { createContext, useState } from "react";
export const UsuariosContext = createContext()





const UserContext= ({children}) => {
    // eslint-disable-next-line react/prop-types
    const [user,setUser]=useState("usuario no encontrado")


    return(
        <UsuariosContext.Provider value={{user,setUser}}>
            {children}
        </UsuariosContext.Provider>
    )
}

export default UserContext