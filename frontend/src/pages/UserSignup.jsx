import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [userData, setUserData] = useState({})
  
  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
        fullName:{
            firstname:firstname,
            lastname:lastname
        },
        email:email,
        password:password
    })
    console.log(userData)
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