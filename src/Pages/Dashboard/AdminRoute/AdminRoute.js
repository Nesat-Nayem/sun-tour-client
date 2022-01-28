import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import useAuth from "../../hooks/useAuth";
const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  let location = useLocation();
  console.log(admin);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress color="success" />
      </div>
    );
  }

  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
