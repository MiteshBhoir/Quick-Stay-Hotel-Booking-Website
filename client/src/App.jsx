import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import AllRooms from './Pages/AllRooms';
import RoomDetails from './Pages/RoomDetails';
import MyBookings from './Pages/MyBookings';
import HotelReg from './Components/HotelReg';
import Layout from './Pages/HotelOwner/Layout';
import Dashboard from './Pages/HotelOwner/Dashboard';
import AddRoom from './Pages/HotelOwner/AddRoom';
import ListRoom from './Pages/HotelOwner/ListRoom';
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext';
import Loader from './Components/Loader';
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const { showHotelReg } = useAppContext();
  return (
    <div >
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/loader/:nextUrl' element={<Loader/>} />

          <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='list-room' element={<ListRoom />} />
            <Route path='add-room' element={<AddRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App