import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
    return (
        <div>
            <h5 className='p-3 text-center w-[93%] absolute top-0' onClick={() => {
                props.setFinishRidePanel(false)
            }}><i className=" text-3xl ri-arrow-down-wide-line"></i> </h5>
            <h3 className='text-2xl font-semibold '>Finish the Ride</h3>
            <div className='flex items-center justify-between border-4 border-yellow-500 rounded-lg p-4 mt-4'>
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

                    <Link to='/captain-home' className='w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>

                
                </div>

            </div>
        </div>

    )
}

export default FinishRide