 import React from 'react'
 
 export const userDataContext = createContext()


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
        <userDataContext.Povider value={[user, setUser]}>
         {children}
        </userDataContext.Povider>
      </div>
   )
 }
 
 export default UserContext