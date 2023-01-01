import React from "react";
import { Outlet } from "react-router-dom";
import UserFooter from "../components/UsersComponents/UserFooter";
import UserHeader from "../components/UsersComponents/UserHeader";

function UsersLayouts() {
  return (
    <>
      <UserHeader />
      <Outlet />
      <UserFooter />
    </>
  );
}

export default UsersLayouts;
