import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // The bouncer checks the browser memory for the VIP wristband
  const user = localStorage.getItem('meetadate_user');

  // If the user doesn't exist, instantly bounce them to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If they DO exist, let them through to see the page (the children)
  return children;
};

export default ProtectedRoute;