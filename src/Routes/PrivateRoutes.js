import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const getLoggedUser = localStorage.getItem("user");

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  if (getLoggedUser === "logged") {
    return children;
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace>
      {" "}
    </Navigate>
  );
};

export default PrivateRoutes;
