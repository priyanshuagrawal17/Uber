import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { User } from '../context/UserContext'

const UserLogin = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [userData, setUserData] = useState({ })

 const navigate = useNavigate()
 const { user, setUser } = React.useContext(User)

 useEffect(() => {
   if (userData) {
     console.log(userData);
   }
 }, [userData]);
 
 const submitHandler = async (e)=>{
    e.preventDefault();
    
    try {
      const response = await axios.post(`http://localhost:3000/user/login`, {
        email: email,
        password: password
      })
      
      if (response.status === 200) {
        const data = response.data
        console.log('data.token:', data.token, typeof data.token)
        localStorage.setItem('token', String(data.token))
        setUser(data.user)
        navigate('/home')
      }
    } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed. Please check your credentials.')
    }
    
    setEmail('')
    setPassword('')
 
 }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
         <div>
         <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input
         required 
         value={email}
         onChange={(e) => {
            setEmail(e.target.value)
         }}
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 mb-2 border w-full text-lg placeholder:text-base'
         type="email" 
         placeholder="email@example.com"
         />
        
        
        <h3 className='text-lg font-medium mb-2'> Enter Password </h3>

        <input 
        required 
        value={password}
         onChange={(e) => {
            setPassword(e.target.value)
         }}
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 mb-2 border w-full text-lg placeholder:text-base'
        type="password" 
        placeholder="password"/>
        
        
        <button 
         className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 mb-2 w-full text-lg placeholder:text-base'
        type="submit">Login</button>

           <p className='text-center'> New Here? <Link to='/signup' className='text-blue-700'>Create New Account </Link></p>     
        
        
        </form>
         </div>
    <div> 
    <Link
     to='/captain-login'
    className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 mb-2 w-full text-lg placeholder:text-base'     
    > Sign in as a captain </Link>
        
    </div>
    </div>
  )
}

export default UserLogin