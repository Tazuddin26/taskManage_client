import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/commonPage/Footer";
import Navbar from "../Pages/commonPage/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
