import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);
  console.log('CaptainDetails context value:', captain);

  if (!captain) {
    return <div>Loading captain details...</div>;
  }

  // Fallbacks for name
  let firstName = '';
  let lastName = '';
  if (captain.fullName) {
    firstName = captain.fullName.firstName || '';
    lastName = captain.fullName.lastName || '';
  } else {
    firstName = captain.firstName || '';
    lastName = captain.lastName || '';
  }
  const hasName = firstName || lastName;

  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-start gap-3'>
          <img className='h-10 w-10 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1682090164953-780d182efb39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZHJpdmluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <h4 className='text-lg font-medium capitalize'>
            {hasName ? `${firstName} ${lastName}` : 'Captain'}
          </h4>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>₹290.50</h4>
          <p className='text-sm font-medium text-gray'>Earned</p>
        </div>
      </div>
      <div className='flex p-3 mt-8 bg-gray-100 rounded-xl items-start justify-center gap-8'>
        <div className='text-center'>
          <i className="text-3xl mb-2 font-thin className='text-lg-font-medium' ri-time-line"></i>
          <h5 className='text-lg-font-medium'>10.2</h5>
          <p className='text-sm font-medium '>Hours Online</p>
        </div>
        <div className='text-center'>
          <i className="text-3xl mb-2 font-thin className='text-lg-font-medium' ri-speed-up-line"></i>
          <h5 className='text-lg-font-medium'>10.2</h5>
          <p className='text-sm font-medium '>Hours Online</p>
        </div>
        <div className='text-center'>
          <i className="text-3xl mb-2 font-thin className='text-lg-font-medium' ri-booklet-line"></i>
          <h5 className='text-lg-font-medium'>10.2</h5>
          <p className='text-sm font-medium '>Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;