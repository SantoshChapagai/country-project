import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet />
};

ProtectedRoute.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

export default ProtectedRoute;