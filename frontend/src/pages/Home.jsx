import React, { useState, useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const [panel, setpanel] = useState(false)
  const vechiclePanelRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vechiclePanelOpen, setvechiclePanelOpen] = useState(false)
  
  const SbmitHandler = (e) => {
     e.preventDefault();
   }

  useGSAP(() => {
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
  }, [panel])
  
  useGSAP(function() {
      if(vechiclePanelOpen){
        gsap.to(vechiclePanelRef.current, {
          transform : 'translateY(0)'
        })
      }else{
        gsap.to(vechiclePanelRef.current, {
          transform : 'translateY(100%)'
        })
      }
   }, [vechiclePanelOpen])
  
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
                <LocationSearchPanel  vehiclePanelOpen={vechiclePanelOpen} setVehiclePanel={setvechiclePanelOpen}/>
             </div>
      </div>
      
      <div ref={vechiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
        <h3 className='text-2xl font-semibold mb-3'>Select a ride</h3>
        
        <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between '>
           <img className= 'h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt=""/>
           <div className='ml-1 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p  className='font-normal text-xs text-gray-600'>Affordable,coampact rides</p>
           </div>
           <h2 className='text-lg font-semibold'>₹ 193.50</h2>
        </div>
        <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between '>
           <img className= 'h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt=""/>
           <div className='ml-1 w-1/2'>
            <h4 className='font-medium text-base'>Uber Moto<span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p  className='font-normal text-xs text-gray-600'>Affordable, Motorcycle rides</p>
           </div>
           <h2 className='text-lg font-semibold'>₹ 95.00</h2>
        </div>
        <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between '>
           <img className= 'h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt=""/>
           <div className='ml-1 w-1/2'>
            <h4 className='font-medium text-base'>Uber Auto<span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>7 mins away</h5>
            <p  className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
           </div>
           <h2 className='text-lg font-semibold'>₹ 103.50</h2>
        </div>
      </div>
    </div>
  )
}

export default Home