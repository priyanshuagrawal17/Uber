import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CaptainSignup from './pages/CaptainSignup'
import Captainlogin from './pages/Captainlogin'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import Home from './pages/Home'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import UserContext from './context/UserContext';
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'


const App = () => {
  return (
    <UserContext>
      <div>
        <Routes>    
          <Route path='/' element={< Start />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/riding' element={<Riding />} />
          <Route path='/captain-riding' element={<CaptainRiding />} />
          <Route path='/signup' element={<UserSignup />} />
          <Route path='/captain-login' element={<Captainlogin />} />
          <Route path='/captain-signup' element={<CaptainSignup />} />
          <Route path='/home' 
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />
          <Route path ='/user/logout'
           element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>} />

         <Route path ='/captain-home' element={
           <CaptainProtectWrapper>
            <CaptainHome />
           </CaptainProtectWrapper>
         } />

        </Routes>
      </div>
    </UserContext>
  )
}

export default App