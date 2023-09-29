import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  console.log(user);
  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet />
};

export default ProtectedRoute;