import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { NavBar, SideBar } from "./layout";
import { ChannelDetails, Feed, SearchFeed, VideoDetails } from "./screens";

function App() {
  const isSideBarOpen = useSelector((state) => state.utils.isSideBarOpen);
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white ">
      <NavBar
      // setIsSideBarOpen={setIsSideBarOpen}
      />
      <div className="flex mt-14">
        <SideBar />
        <div className={`${isSideBarOpen ? "w-60" : "w-0"} duration-500`}></div>
        <div className="p-6 flex-1">
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/history" element={<History />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
