import { createContext, useState } from "react";

export const User = createContext()

const UserContext = ({children}) => {
   
   const [user, setUser] = useState({
    email: '',
    fullName:{
        firstName:'',
        lastName:''
    }
   })
   
    return (
        <div>
        <User.Provider value={{user, setUser}}>
         {children}
        </User.Provider>
        </div>
   )
 }
 
 export default UserContext