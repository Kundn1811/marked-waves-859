import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRoute from "./AppRoute";
import AuthRoute from "./AuthRoute";
import FrontRoute from "./FrontRoute";
import RequireAuth from "../hoc/RequireAuth";
const NavigationRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<FrontRoute />} />
        <Route path="/auth/*" element={<AuthRoute />} />
        <Route
          path="/app/*"
          element={
            <RequireAuth>
              <AppRoute />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default NavigationRoute;
