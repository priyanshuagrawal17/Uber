import React, { useState, useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VechiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingforDriver from '../components/LookingforDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const [panel, setpanel] = useState(false)
  const vechiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const VechicleFoundRef = useRef(null)
  const WaitingForDriverRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)


  const [vechiclePanelOpen, setvechiclePanelOpen] = useState(false)
  const [confirmedRide, setConfirmedRide] = useState(false)
  const [vechiclefound, setvechiclefound] = useState(false)
  const [selectedRide, setSelectedRide] = useState(null)
  const [waitingForDriverOpen, setWaitingForDriverOpen] = useState(false)
  
  
  
  
  const SbmitHandler = (e) => {
     e.preventDefault();
   }

  useGSAP(() => {
    if (panelRef.current && panelCloseRef.current) {
      if (panel) {
        gsap.to(panelRef.current, {
          height: '70%',
          padding:24,
          opacity:1
        })
        gsap.to(panelCloseRef.current,{
          opacity:1
        })
      } else {
        gsap.to(panelRef.current, {
          height: '0%',
          padding:0,
          opacity:0
        })
        gsap.to(panelCloseRef.current,{
          opacity:0
        })
      }
    }
  }, [panel])
  
  useGSAP(function() {
      if(vechiclePanelRef.current) {
        if(vechiclePanelOpen){
          gsap.to(vechiclePanelRef.current, {
            transform : 'translateY(0)'
          })
        }else{
          gsap.to(vechiclePanelRef.current, {
            transform : 'translateY(100%)'
          })
        }
      }
   }, [vechiclePanelOpen])
  
   useGSAP(function() {
    if(confirmRidePanelRef.current) {
      gsap.to(confirmRidePanelRef.current, {
        transform : 'translateY(0)'
      })
    } else if (confirmRidePanelRef.current !== null) {
      gsap.to(confirmRidePanelRef.current, {
        transform : 'translateY(100%)'
      })
    }
 }, [confirmedRide, selectedRide])

 useGSAP(function() {
  if(WaitingForDriverRef.current) {
    if(waitingForDriverOpen){
      gsap.to(WaitingForDriverRef.current, {
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(WaitingForDriverRef.current, {
        transform : 'translateY(100%)'
      })
    }
  }
}, [waitingForDriverOpen])


  return (
     <div className='h-screen relative overflow-hidden'>
       <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />      
      <div className='h-screen w-screen'>
        <img className='w-full h-full object-cover' src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif" alt="" />
      </div> 
      <div className='bg-white bg-opacity-80 flex flex-col justify-end h-screen absolute top-0 w-full'>
             {/* 
             <div ref={panelRef} className='bg-red-500 overflow-hidden w-full' style={{height: panel ? '200px' : '0px'}}>
               <p className="text-white p-4">Panel Content Here</p>
             </div> 
             */}
             <div className='h-[30%] p-5 bg-white relative'>
              <h5 ref={panelCloseRef} onClick={()=>{
                setpanel(false)
              }}
              className=' absolute opacity-0 top-6 right-6 text-2xl'>
                <i className="ri-arrow-down-wide-line"></i>
              </h5>
             <h4 className='text-2xl font-semibold'> Find a Trip</h4>
             <form onSubmit={(e)=>{
                SbmitHandler(e)
               }}>
                <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
               
               <input
               onClick={()=>{
                setpanel(true)
               }}
               
               value={pickup}
               onChange={(e)=>{ 
                setpickup(e.target.value)
               }}
                 className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
                 type="text" 
                 placeholder='Add a pick-up location'
                  />

               <input value={destination}
               onClick={()=>{
                setpanel(true)
               }}
               onChange={(e)=>{ 
                setdestination(e.target.value)
               }}
               className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
               type="text" 
               placeholder='Add a destination' 
               />


             </form>
             </div>
             <div ref={panelRef} className='opacity-0 bg-white h-0overflow-hidden w-full' style={{height: panel ? '200px' : '0px'}}>
                <LocationSearchPanel  vehiclePanelOpen={vechiclePanelOpen} setVehiclePanel={setvechiclePanelOpen} setPanelOpen={setpanel}/>
             </div>
      </div>
      
      <div ref={vechiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <VechiclePanel setConfirmedRidePanel={setConfirmedRide} setvechiclePanelOpen={setvechiclePanelOpen} setSelectedRide={setSelectedRide}/>
      </div>
      {confirmedRide && selectedRide && (
        <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
            <ConfirmedRide setVehicleFound={setvechiclefound} setvechiclePanelOpen={setvechiclePanelOpen} setConfirmedRide={setConfirmedRide} setWaitingForDriverOpen={setWaitingForDriverOpen} ride={selectedRide}/>
        </div>
      )}
      <div ref={VechicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
           <LookingforDriver setVehicleFound={setvechiclefound}/>
      </div>
      <div ref={WaitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
           {waitingForDriverOpen && <WaitingForDriver waitingForDriver={setWaitingForDriverOpen} ride={selectedRide} />}
      </div>
    </div>
  )
}

export default Home