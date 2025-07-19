import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  const[otp, setOtp] = useState('')
    
  const submitHandler = (e) => {

       e.preventDefault()
    }
 
    return (
    <div>
       <h5 className='p-3 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className=" text-3xl ri-arrow-down-wide-line"></i> </h5>
            <h3 className='text-2xl font-semibold '>Confirm the Ride</h3>
            <div className='flex items-center justify-between border-4 border-yellow-500 rounded-lg p-2 mt-4'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-10' src="https://img.freepik.com/free-photo/young-man-sad-expression_1194-2829.jpg?semt=ais_hybrid&w=740" alt="" />
                    <h2 className='text-lg font-medium'>Priyanshu</h2>
                </div>
                <h5 className='text-md font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-3 justify-between flex-col items-center'>
             
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                         <i className="ri-map-pin-user-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>641, Raj steel works, Ashok Nagar </h3>
                            <p className='text-sm -mt-1 text-gray'> Friends Colony</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>641, Raj steel works, Ashok Nagar</h3>
                            <p className='text-sm -mt-1 text-gray'> Friends Colony</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                        <i className="ri-wallet-2-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.36</h3>
                            <p className='text-sm -mt-1 text-gray'> Cash Mode</p>
                        </div>
                    </div>
                </div>
                
                <div className='mt-6 w-full'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <input valid={otp} onChange={() => setOtp(e.target.value)} type="text" placeholder='Enter OTP' className='w-full px-6 py-3 font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' />
                <Link to='/captain-riding' className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm Ride</Link>
                <button onClick={()=>{
                  props.setConfirmRidePopupPanel(false)
                  props.setRidePopupPanel(false)

                }} className='w-full mt-2 text-lg bg-red-600 text-white font-semibold p-3 rounded-lg'>Cancel Ride</button>
                 
                </form>
                </div>
                
            </div> 
    </div>
  )
}

export default ConfirmRidePopUp