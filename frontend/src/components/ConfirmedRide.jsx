import React from 'react'

const ConfirmedRide = (props) => {
    return (
        <div>
            <h5 className='p-3 text-center w-[93%] absolute top-0' onClick={() => {
                props.setConfirmRidePanel(false)
            }}><i className=" text-3xl ri-arrow-down-wide-line"></i> </h5>
            <h3 className='text-2xl font-semibold mb-3'>Confirm your Ride</h3>

            <div className='flex gap-3 justify-between flex-col items-center'>
                <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt=""></img>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                         <i className="ri-map-pin-user-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>641, Raj steel works, Ashok Nagar </h3>
                            <p className='text-sm -mt-1 text-gray'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>641, Raj steel works, Ashok Nagar</h3>
                            <p className='text-sm -mt-1 text-gray'>{props.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                        <i className="ri-wallet-2-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
                            <p className='text-sm -mt-1 text-gray'> Cash Mode</p>
                        </div>
                    </div>
                </div>
                <div className='my-2 text-lg font-semibold'>Selected Ride: {props.vehicleType}</div>
                <button onClick={()=>{
                   props.setVehicleFound(true);
                   props.setConfirmRidePanel(false);
                   props.createRide()
                }} className='w-full mt-2 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
            </div>

        </div>
    )
}

export default ConfirmedRide