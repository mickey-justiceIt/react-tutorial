import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  isAuth,
  setIsAuth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => <Component isAuth={isAuth} setIsAuth={setIsAuth} />}
    />
  );
};

export default ProtectedRoute;
