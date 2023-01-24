import React, { useState } from "react";
import { useSelector } from "react-redux";
import { explore, home, subscriptions } from "../utils/constant";
import CategoryList from "./components/CategoryList";

const SideBar = () => {
  const isSideBarOpen = useSelector((state) => state.utils.isSideBarOpen);
  console.log(isSideBarOpen);

  return (
    <div className={`${isSideBarOpen ? "w-60" : "w-20"} duration-500`}>
      <div
        className={`divide-y divide-[#3f3f3f]/70 h-[92vh] hover:overflow-y-scroll overflow-y-hidden  px-3 shrink-0 fixed left-0 duration-500 ${
          isSideBarOpen ? "" : "-translate-x-60"
        }`}
      >
        <CategoryList category={home} home />
        <CategoryList
          category={subscriptions}
          title="Subscriptions"
          subscriptions
        />
        <CategoryList category={explore} title="Explore" />
      </div>
    </div>
  );
};

export default SideBar;
