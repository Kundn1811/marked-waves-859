import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../pages/SideBar";
import Time from "../components/Time"
import ProjectBody from '../pages/ProjectBody'
import CreateProject from "../pages/CreateProject"
import TaskContHead  from "../components/Task/TaskContHead"
const AppRoute = () => {
  return (
    <div>
        <SideBar/>
    <Routes>
      <Route path="/timemanage" element={<Time/>}/>
      <Route path="/project"  element={<ProjectBody/>}/>
      <Route path="/newproject" element={<CreateProject/>} />
      <Route path="/task" element={<TaskContHead/>} />
    </Routes>
    </div>
  );
};

export default AppRoute;
