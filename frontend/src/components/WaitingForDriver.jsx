import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h2 className='text-lg font-semibold text-left mt-4 mb-2'>Waiting for Driver</h2>
      <h5 className='p-3 text-center w-[93%] absolute top-0' onClick={() => {
          props.WaitingForDriver(false)
      }}><i className=" text-3xl ri-arrow-down-wide-line"></i> </h5>
            
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
            </div>

        </div>
  )
}

export default WaitingForDriver