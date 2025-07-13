import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [captainData, setCaptainData] = useState(null)

  useEffect(() => {
    if (captainData) {
      console.log(captainData);
    }
  }, [captainData]);

  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
        fullName:{
            firstname:firstname,
            lastname:lastname
        },
        email:email,
        password:password
    })
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div>
       <div className='py-5 px-5 h-screen flex flex-col justify-between'>
         <div>
         <img className='w-16 mb-10' src="https://ih1.redbubble.net/image.5007880594.5940/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>


        <h3 className='text-base font-medium mb-2'>What's our Captain Name</h3>
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
        
        <h3 className='text-base font-medium mb-2'>What's our Captain Email</h3>
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

           <p className='text-center'> Already have an account? <Link to='/captain-login' className='text-blue-700'>Login Here</Link></p>     
        
        
        </form>
         </div>
    <div> 
    {/* <Link
     to='/captain-login'
    className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 mb-2 w-full text-lg placeholder:text-base'     
    > Sign in as a captain </Link> */}

    <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy policy 
        </span> and <span className='underline'>Terms of Service apply</span> </p>
    </div>
    </div>
        
    
    </div>
  )
}

export default CaptainSignup