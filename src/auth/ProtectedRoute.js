import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet />
};

ProtectedRoute.prototypes = {
  user: PropTypes.object,
};

export default ProtectedRoute;