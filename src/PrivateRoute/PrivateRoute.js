import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Pages/hooks/useAuth';
import loader from '../images/loader.gif'

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth()
  const location = useLocation()
  if (isLoading) {
    return <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={loader} alt="" />
    </div>
  } else {
    return user.email ? children : <Navigate to="/login" replace state={{ from: location }} />;
  }
};

export default PrivateRoute;