import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
       <h5 className='p-3 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className=" text-3xl ri-arrow-down-wide-line"></i> </h5>
            <h3 className='text-2xl font-semibold '>New Ride Available</h3>
            <div className='flex items-center justify-between bg-yellow-400 rounded-lg p-2 mt-4'>
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
                            <p className='text-sm -mt-1 text-gray'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>641, Raj steel works, Ashok Nagar</h3>
                            <p className='text-sm -mt-1 text-gray'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                        <i className="ri-wallet-2-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.ride?.fair}</h3>
                            <p className='text-sm -mt-1 text-gray'> Cash Mode</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex mt-5 w-full items-center justify-between'>
                <button onClick={()=>{
                
                props.setRidePopupPanel(false)
                }} className='w-full mt-1 bg-gray-300 text-gray-600 font-semibold p-3 px-8 rounded-lg'>Ignore</button>
                
                </div>

                <button onClick={()=>{
                   props.confirmRide();
                   props.setRidePopupPanel(false);
                   props.setConfirmRidePopupPanel(true);
                
                }} className='w-full  bg-green-600 text-white font-semibold p-3 px-8 rounded-lg'>Accept</button>
                
                
            </div> 
    </div>
  )
}

export default RidePopUp