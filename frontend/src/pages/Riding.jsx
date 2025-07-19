import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-3 top-2 h-10 w-5 bg-white flex items-center justify-center rounded-full'>
        <i className ="text-xl font-medium ri-home-5-line"></i>
        </Link>
        <div className='h-1/2'>
        <img className='w-full h-full object-cover' src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif" alt="" /> 
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between '>
               <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt=""></img>
                
               <div className='text-right'>
                <h2 className='text-lg font-medium'>Priyanshu</h2>
                <h4 className='text-lg font-semibold -mt-1 -mb-1'>UP 75 AJ8247</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki Dezire</p>
               </div>
               </div>
            <div className='flex gap-3 justify-between flex-col items-center'>
                
                <div className='w-full mt-5'>
                    
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
            </div>
         <button className='w-full mt-2 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div >
    </div>
  )
}

export default Riding