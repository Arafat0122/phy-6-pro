import React from "react";
import Navbar from "../Components/common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/common/Footer";
const Root = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#040404] text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Root;
