import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import EventsPage from './EventsPage'; 
import GalleryPage from './GalleryPage';
import LoveNotesPage from './LoveNotesPage';
import MeetUsPage from './MeetUsPage'; 
import ProfileSetup from './ProfileSetup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} /> 
        <Route path="/gallery" element={<GalleryPage />} /> 
        <Route path="/lovenotes" element={<LoveNotesPage />} /> 
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/meetus" element={<MeetUsPage />} /> 
        <Route path="/profile-setup" element={<ProfileSetup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;