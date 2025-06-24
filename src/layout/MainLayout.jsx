import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/commonPage/Footer";
import Navbar from "../Pages/commonPage/Navbar";
import dashboardPic from "../assets/pic2.png";
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="relative h-[250px] bg-no-repeat bg-center bg-cover flex justify-end items-end "
        style={{
          backgroundImage: `
        url(${dashboardPic}),
        radial-gradient(ellipse at left top,#60E5AE -20%,#040612 30%,transparent),
        radial-gradient(ellipse at bottom right, #60E5AE -60%, #040612 80%,transparent)`,
          backgroundBlendMode: "overlay",
          backgroundSize: "420px, cover, cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right, top left, bottom right",
        }}
      >
        {/* <img src={dashboardPic} alt="" className="object-cover w-80 " /> */}
      </div>
      <div className="absolute w-full">
        <div className=" ">
          <Navbar />
        </div>
        <main className=" w-full pt-34 flex-grow">
          <Outlet />
        </main>
      </div>
      <div className="fixed w-full border bottom-0 ">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
