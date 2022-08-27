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
import { Divider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Support from "../pages/Support";
import Blog from "../pages/Blog";
const FrontRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default FrontRoute;
