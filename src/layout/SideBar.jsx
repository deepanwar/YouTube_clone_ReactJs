import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import { explore, home, subscriptions } from "../utils/constant";
import ListItem from "./components/ListItem";

const SideBar = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const isSideBarOpen = useSelector((state) => state.utils.isSideBarOpen);

  const browseChannel = { name: "Browse Channel", icon: BsPlusCircle };

  return (
    <div className={`${isSideBarOpen ? "w-60" : "w-20"} duration-500`}>
      <div
        className={`divide-y divide-[#3f3f3f]/70 h-[92vh] hover:overflow-y-scroll overflow-y-hidden  px-3 shrink-0 fixed left-0 duration-500 ${
          isSideBarOpen ? "" : "-translate-x-60"
        }`}
      >
        <ul className="text-white py-3 ">
          {home.map((item,i) => (
            <ListItem {...item} key={i} />
          ))}
          {isShowMore && [1, 2, 3, 4, 5].map((item) => <ListItem />)}
          <li
            className={`flex items-center space-x-5 py-2 px-3 rounded-lg hover:bg-[#272727] cursor-pointer`}
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? (
              <>
                <IoIosArrowUp size={20} />
                <p className="text-sm">Show Less</p>
              </>
            ) : (
              <>
                <IoIosArrowDown size={20} />
                <p className="text-sm">Show More</p>
              </>
            )}
          </li>
        </ul>
        <div className="py-3">
          <h3 className="mb-2 px-4">Subscriptions</h3>
          <ul className="text-white ">
            {subscriptions.map((item,i) => (
              <ListItem {...item} key={i}/>
            ))}
            <ListItem {...browseChannel} />
          </ul>
        </div>
        <div className="py-3">
          <h3 className="mb-2 px-4">Explore</h3>
          <ul className="text-white  ">
            {explore.map((item,i) => (
              <ListItem {...item} key={i}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
