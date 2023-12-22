import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import TopNavbar from "./topNavbar";

const Layout = () => {
  
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
