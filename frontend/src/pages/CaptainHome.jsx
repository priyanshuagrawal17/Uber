import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainHome = () => {
  
  const [ridePopupPanel, setridePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const [waitingForDriverOpen, setWaitingForDriverOpen] = useState(false)
  
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(function() {
    if (ridePopupPanelRef.current) {
      gsap.set(ridePopupPanelRef.current, { transform: 'translateY(100%)' });
    }
    if(ridePopupPanel) {
      if(waitingForDriverOpen){
        gsap.to(ridePopupPanelRef.current, {
          transform : 'translateY(0)'
        })
      }else{
        gsap.to(ridePopupPanelRef.current, {
          transform : 'translateY(100%)'
        })
      }
    }
  }, [ridePopupPanel, waitingForDriverOpen])

  useGSAP(function() {
    if (confirmRidePopupPanelRef.current) {
      gsap.set(confirmRidePopupPanelRef.current, { transform: 'translateY(100%)' });
    }
    if(confirmRidePopupPanel) {
      if(waitingForDriverOpen){
        gsap.to(confirmRidePopupPanelRef.current, {
          transform : 'translateY(0)'
        })
      }else{
        gsap.to(confirmRidePopupPanelRef.current, {
          transform : 'translateY(100%)'
        })
      }
    }
  }, [confirmRidePopupPanel, waitingForDriverOpen])
  
  
  return (
    <div className='h-screen'>
      <div className='fixed p-3 top-0 flex items-center justify-between w-screen '>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <Link to='/home' className=' h-10 w-5 bg-white flex items-center justify-center rounded-full'>
          <i className="text-xl font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      {/* Temporary button to show the RidePopUp panel for testing */}
      <button onClick={() => setWaitingForDriverOpen(true)} className='fixed top-20 right-4 z-20 bg-black text-white px-4 py-2 rounded'>Show Ride Panel</button>
      <div className='h-3/5'>
        <img className='w-full h-full object-cover' src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif" alt="" />
      </div>
      <div className='h-1/2 p-3'>
         <CaptainDetails/>
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12'>
          <RidePopUp setRidePopupPanel={setWaitingForDriverOpen} setConfirmRidePopupPanel={setConfirmRidePopupPanel} ride={"Sample Ride"}/>
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed w-full z-10 h-screen bottom-0 bg-white px-3 py-10 pt-12'>
          <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setWaitingForDriverOpen} />
      </div>
    </div>
  ) 
}

export default CaptainHome