import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Navbar from "../Navbar";
import SideMenu from "../SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="">
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className="flex">
          <div className="hidden md:block lg:w-64 fixed lg:relative">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="grow mx-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
