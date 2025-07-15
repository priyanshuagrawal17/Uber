import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { User } from '../context/UserContext'


const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  const { user, setUser } = React.useContext(User)
  
  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser ={
      fullName: {
         firstName: firstname,
         lastName: lastname
      },
      email: email,
      password: password
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser)
      if (response.status === 200 || response.status === 201) {
        const data = response.data
        console.log('data.token:', data.token, typeof data.token)
        localStorage.setItem('token', String(data.token)) 
        setUser(data.user)   
        navigate('/home')
      }
    } catch (err) {
      if (err.response) {
        console.log('Signup error:', err.response.data)
        alert('Signup error: ' + (err.response.data.message || JSON.stringify(err.response.data)))
      } else {
        console.log('Signup error:', err)
        alert('Signup error: ' + err.message)
      }
    }
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }
    return (
    <div>
       <div className='p-7 h-screen flex flex-col justify-between'>
         <div>
         <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>


        <h3 className='text-base font-medium mb-2'>What's your Name</h3>
        <div className='flex gap-4 mb-6'>
        <input
         required         
         className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 mb-2 border  text-lg placeholder:text-base'
         type="text" 
         placeholder="First Name"
         value={firstname}
         onChange={(e) => {
            setFirstName(e.target.value)
         }}
         />
        
        <input
         required         
         className='bg-[#eeeeee]   w-1/2 rounded px-4 py-2 mb-2 border  text-lg placeholder:text-base'
         type="text" 
         placeholder='Last Name'
         value={lastname}
         onChange={(e) => {
            setLastName(e.target.value)
         }}
         />
        </div>
        
        <h3 className='text-base font-medium mb-2'>What's your Email</h3>
        <input
         required 
         value={email}
         onChange={(e) => {
            setEmail(e.target.value)
         }}       
         className='bg-[#eeeeee]  mb-6 rounded px-4 py-2  border w-full text-lg placeholder:text-base'
         type="email" 
         placeholder="email@example.com"
         />
        
        
        <h3 className='text-base font-medium mb-2'> Enter Password </h3>

        <input 
         className='bg-[#eeeeee] mb-6 rounded px-4 py-2  border w-full text-lg placeholder:text-base'
         value={password}
         onChange={(e) => {
            setPassword(e.target.value)
         }}

         required type="password" 
        placeholder="password"/>
        
        
        <button 
         className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        type="submit">Sign Up</button>

           <p className='text-center'> Already have an account? <Link to='/login' className='text-blue-700'>Login Here</Link></p>     
        
        
        </form>
         </div>
    <div> 
    
     {/* <Link
     to='/captain-login'
    className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 mb-2 w-full text-lg placeholder:text-base'     
    > Sign in as a captain </Link> */}

    <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, <span className='underline'>WhatsApp or SMS messages </span>,including by automated means, from Uber and its affiliates to the number provided.</p>
    </div>
    </div>
        
    
    </div>
  )
}

export default UserSignup