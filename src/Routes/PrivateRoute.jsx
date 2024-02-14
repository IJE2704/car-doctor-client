import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvideer";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    <div className="flex justify-center items-center">
      <span className="loading loading-spinner text-error"></span>
    </div>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  }
};

export default PrivateRoute;
