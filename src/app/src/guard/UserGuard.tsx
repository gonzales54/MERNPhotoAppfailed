import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserGuard = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  const { user, setUser } = useAuth();

  if(user) {
    return(
      <>{children}</>
    )
  } else {
    return (
      <Navigate to="/login"/>
    )
  }
}

export default UserGuard;