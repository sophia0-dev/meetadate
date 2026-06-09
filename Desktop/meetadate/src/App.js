import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import EventsPage from './EventsPage'; 
import GalleryPage from './GalleryPage';
import LoveNotesPage from './LoveNotesPage';
import MeetUsPage from './MeetUsPage'; 
import ProfileSetup from './ProfileSetup';
import ProtectedRoute from './ProtectedRoute';
import GuestRoute from './GuestRoute'; 
import NavBar from './NavBar';
import Footer from './Footer';

function App() {

  return (
    <BrowserRouter basename="/app">
      <div className="app-wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/lovenotes" element={<LoveNotesPage />} />
     {/* Guest Only Pages: Logged-in users will be bounced away from these */}
       <Route 
         path="/register" 
         element={
           <GuestRoute>
             <RegisterPage />
           </GuestRoute>
         } 
       />
       <Route 
         path="/login" 
         element={
           <GuestRoute>
             <LoginPage />
           </GuestRoute>
         } 
       />
        <Route path="/meetus" element={<MeetUsPage />} />
        
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="*" element={<HomePage />} />
         <Route 
            path="/events" 
            element={
              <ProtectedRoute>
                <EventsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/gallery" 
            element={
              <ProtectedRoute>
                <GalleryPage />
              </ProtectedRoute>
            } 
          />

      </Routes>
        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;