import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../pages/SideBar";
import Time from "../components/Time"
const AppRoute = () => {
  return (
    <div>
        <SideBar/>
    <Routes>
      <Route path="/timemanage" element={<Time/>}/>
      <Route path="project" />
    </Routes>
    </div>
  );
};

export default AppRoute;
