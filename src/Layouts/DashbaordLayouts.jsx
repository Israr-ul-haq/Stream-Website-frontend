import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/DashboardComponents/Footer";
import Header from "../components/DashboardComponents/Header";
import Sidebar from "../components/DashboardComponents/Sidebar";

function Layouts() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layouts;
