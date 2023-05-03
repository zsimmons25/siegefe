import React from "react";
import { Navigate, Route, RouteProps } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ProtectedRoute = (props: RouteProps) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.account) {
    if (props.path === "/admin") {
      return <Navigate to={"/dashboard"} />;
    }
    return <Route {...props} />;
  } else if (!auth.account) {
    return <Navigate to={"/admin"} />;
  } else {
    return <div>User or Password Incorrect</div>;
  }
};

export default ProtectedRoute;