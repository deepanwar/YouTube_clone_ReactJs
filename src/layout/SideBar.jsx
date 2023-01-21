import React, { useState } from "react";
import { explore, home, subscriptions } from "../utils/constant";
import CategoryList from "./components/CategoryList";

const SideBar = () => {
 
  return (
    <div className="divide-y divide-[#3f3f3f]/70 h-[92vh] hover:overflow-y-scroll overflow-y-hidden w-60 px-3 shrink-0">
      <CategoryList category={home} home />
      <CategoryList
        category={subscriptions}
        title="Subscriptions"
        subscriptions
      />
      <CategoryList category={explore} title="Explore" />
    </div>
  );
};

export default SideBar;
