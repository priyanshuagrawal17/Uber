import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])


  const [waitingForDriverOpen, setWaitingForDriverOpen] = useState(false);
  return (
    <div className='h-screen relative'>
        
      <div className='fixed p-3 top-0 flex items-center justify-between w-screen '>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <Link to='/home' className=' h-10 w-5 bg-white flex items-center justify-center rounded-full'>
          <i className="text-xl font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <button onClick={() => setWaitingForDriverOpen(true)} className='fixed top-20 right-4 z-20 bg-black text-white px-4 py-2 rounded'>Show Ride Panel</button>
      <div className='h-4/5'>
        <img className='w-full h-full object-cover' src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif" alt="" />
      </div>
      <div className='h-1/5 p-6 flex items-center justify-between relative  bg-yellow-400 PT-10'
      onClick={() => {
        setFinishRidePanel(true);
      }}
      >

      <h5 className='p-3 text-center w-[95%] absolute top-0' onClick={() => {
                
            }}><i className=" text-3xl ri-arrow-up-wide-line"></i> </h5>
         <h4 className='text-xl font-semibold'> 4 KM away</h4>
         <button className='w-full bg-black text-white font-semibold p-3 px-8 rounded-lg'>Complete Ride</button>
      </div>
      <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12'>
          <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>     

    </div>
  )
}

export default CaptainRiding