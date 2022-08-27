import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../pages/SideBar";
import Time from "../components/Time"
import ProjectBody from '../pages/ProjectBody'
import CreateProject from "../pages/CreateProject"
const AppRoute = () => {
  return (
    <div>
        <SideBar/>
    <Routes>
      <Route path="/timemanage" element={<Time/>}/>
      <Route path="/project"  element={<ProjectBody/>}/>
      <Route path="/newproject" element={<CreateProject/>} />
    </Routes>
    </div>
  );
};

export default AppRoute;
