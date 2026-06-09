import React from 'react';
import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
  // Check if the user is already logged in
  const user = localStorage.getItem('meetadate_user');

  // If they ARE logged in, bounce them to the home page!
  if (user) {
    return <Navigate to="/" replace />;
  }

  // If they are a true guest (not logged in), let them see the page
  return children;
};

export default GuestRoute;