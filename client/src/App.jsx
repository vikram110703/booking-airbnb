import './App.css'
import { Routes, Route } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { LoginPage } from './pages/LoginPage';
import { Layout } from './Layout';
import { RegisterPage } from './pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import {ProfilePage } from './pages/ProfilePage';
import { PlacesPage } from './pages/PlacesPage';
import { PlacePage } from './pages/PlacePage';
import { PlacesFormPage } from './pages/PlacesFormPage';
import { BookingsPage } from './pages/BookingsPage';
import { BookingPage } from './pages/BookingPage';



function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Register' element={<RegisterPage />} />
           <Route path='/account' element={<ProfilePage/>}/> 
           <Route path='/account/places' element={<PlacesPage />}/> 
           <Route path='/account/places/new' element={<PlacesFormPage/>}/> 
           <Route path='/account/places/:id' element={<PlacesFormPage/>}/> 
           <Route path='/place/:id' element={<PlacePage/>}/> 
           <Route path='/account/bookings'element={<BookingsPage/>}/>
           <Route path='/account/bookings/:id'element={<BookingPage/>}/>
        </Route>

      </Routes>
    </UserContextProvider>

  )
}

export default App
