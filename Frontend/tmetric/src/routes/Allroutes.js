import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ConfirmEmail from "../pages/ConfirmEmail";
import ChooseWorkSpace from "../pages/ChooseWorkSpace";
import WorkSpacePage from "../pages/WorkSpacePage";
import SetupAlmostComp from "../pages/SetupAlmostComp";
import IntegrateTTWorkFlowPage from "../pages/IntegrateTTWorkflowPage";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/confirmemail" element={<ConfirmEmail />} />
      <Route path="/chooseworkspace" element={<ChooseWorkSpace />} />
      <Route path="/integratettworkspace" element={<IntegrateTTWorkFlowPage />} />
      <Route path="/workspacepage" element={<WorkSpacePage />} />
      <Route path="/setupalmostcomp" element={<SetupAlmostComp />} />
    </Routes>
  );
};

export default Allroutes;
