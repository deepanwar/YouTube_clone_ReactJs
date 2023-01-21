import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, SideBar } from "./layout";
import { ChannelDetails, Feed, SearchFeed, VideoDetails } from "./screens";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white ">
      <NavBar />
      <div className="flex mt-14">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
