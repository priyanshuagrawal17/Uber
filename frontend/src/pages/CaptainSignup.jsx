import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainSignup = () => {

  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [captainData, setCaptainData] = useState(null)

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')

  
  
  const {captain , setCaptain} = React.useContext(CaptainDataContext)

  useEffect(() => {
    if (captainData) {
      console.log(captainData);
    }
  }, [captainData]);

  const submitHandler =async (e) => {
    e.preventDefault()
    const captainData = {
        fullName: {
            firstName: firstname,
            lastName: lastname
        },
        email: email,
        password: password,
        vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType
        }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)

    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
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
        
        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Bike</option>
            </select>
          </div>
        
        <button 
         className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        type="submit">Create Captain Account</button>

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