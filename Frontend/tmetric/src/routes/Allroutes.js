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
import ErrorPage from "../pages/ErrorPage";
import Pricing from "../pages/Pricing";
import Blog from "../pages/Blog";
import Support from "../pages/Support";
import Dashboard from "../pages/Dashboard";
import NewDashboard from "../pages/NewDashboard";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/confirmemail" element={<ConfirmEmail />} />
      <Route path="/chooseworkspace" element={<ChooseWorkSpace />} />
      <Route
        path="/integratettworkspace"
        element={<IntegrateTTWorkFlowPage />}
      />
      <Route path="/workspacepage" element={<WorkSpacePage />} />
      <Route path="/setupalmostcomp" element={<SetupAlmostComp />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/newdashboard" element={<NewDashboard />} />

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Allroutes;
