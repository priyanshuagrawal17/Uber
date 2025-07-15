import React from 'react'

const LocationSearchPanel = (props) => {
   console.log(props);

//   sample array for locations
    const locations = [
        "24B, 2nd Floor, Road No. 1, New Delhi - 110001, India",
        "641, Raj steel works Askok Nagar Etawah, India",
        "Santoor Grace Society Near Sargasan Gandhi Nagar, India",
        "21/7 Clement Town Dehradun Near Upes Dehradun, India",
    ]
    
    
    return (
    <div>
        
        {
            locations.map((elem, idx) => (
                <div
                    key={idx}
                    onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }}
                    className="flex gap-3 border-2 p-1 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
                >
                    <h2 className='bg-[#eee] h-7 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-line text-xl"></i></h2>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
            ))
        }

        {/* <div className=" flex gap-3 border-2 p-1 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
            <h2 className='bg-[#eee] h-7 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-line text-xl"></i></h2>
            <h4 className='font-medium'>24B, 2nd Floor, Road No. 1, New Delhi - 110001, India</h4>
        </div>
        <div className=" flex gap-3 border-2 p-1 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
            <h2 className='bg-[#eee] h-7 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-line text-xl"></i></h2>
            <h4 className='font-medium'>641, Raj steel works Askok Nagar Etawah, India</h4>
        </div>
        <div className=" flex gap-3 border-2 p-1 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
            <h2 className='bg-[#eee] h-7 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-line text-xl"></i></h2>
            <h4 className='font-medium'>Santoor Grace Society Near Sargasan Gandhi Nagar, India</h4>
        </div>
        <div className=" flex gap-3 border-2 p-1 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
            <h2 className='bg-[#eee] h-7 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-line text-xl"></i></h2>
            <h4 className='font-medium'>21/7 Clement Town Dehradun Near Upes Dehradun, India</h4>
        </div> */}
    </div>
  )
}

export default LocationSearchPanel