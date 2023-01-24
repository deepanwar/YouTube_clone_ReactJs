import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DotsSvg, MenuSvg, MicSvg, UserSvg } from "../assets";
import youtubeLogoSvg from "../assets/youtubeLogoSvg.svg";
import { IconButton, SearchInput } from "../components";
import { setIsSideBarOpen } from "../redux/utils/utilsSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className=" h-14 fixed top-0 left-0 right-0 z-50">
      <div className="px-4 py-2 flex justify-between items-center text-white bg-[#0f0f0f]">
        <div className="flex space-x-4">
          <IconButton onClick={() => dispatch(setIsSideBarOpen())}>
            <MenuSvg />
          </IconButton>

          <img src={youtubeLogoSvg} alt="" />
        </div>
        <div className="flex-1 max-w-[750px] ml-16 flex space-x-3">
          <SearchInput />
          <IconButton className="bg-[#181818]">
            <MicSvg />
          </IconButton>
        </div>
        <div className="flex space-x-3">
          <IconButton>
            <DotsSvg />
          </IconButton>
          <div className="flex justify-center items-center text-blue-500 space-x-2 border px-3 rounded-full border-[#3f3f3f]">
            <UserSvg />
            <p>Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
