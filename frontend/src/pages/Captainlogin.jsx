import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState(null)
 
  useEffect(() => {
    if (captainData) {
      console.log(captainData);
    }
  }, [captainData]);

  const submitHandler = (e)=>{
     e.preventDefault();
     setCaptainData({
       email:email,
       password:password
     })
     setEmail('')
     setPassword('')
  
  }
  
  
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-10' src="https://ih1.redbubble.net/image.5007880594.5940/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="" />
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

      <p className='text-center'> Join as a fleet? <Link to='/captain-signup' className='text-blue-700'> Register as a Captain </Link></p>     
   
   
   </form>
    </div>
<div> 
<Link
to='/login'
className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 mb-2 w-full text-lg placeholder:text-base'     
> Sign in as a User </Link>
<p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, <span className='underline'>WhatsApp or SMS messages </span>,including by automated means, from Uber and its affiliates to the number provided.</p>
</div>
</div>
  )
}

export default Captainlogin