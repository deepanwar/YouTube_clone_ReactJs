import React, { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { useDispatch } from "react-redux";
import IconButton from "../components/IconButton";
import VideoCard from "../components/VideoCard";
import { useGetNewVideosQuery } from "../redux/services/youtubeApi";
import { setIsSideBarOpen } from "../redux/utils/utilsSlice";
import { terms } from "../utils/constant";

const Feed = () => {
  const [term, setTerm] = useState("Football");
  const dispatch = useDispatch();
  const { data } = useGetNewVideosQuery(term);
  // console.log(data);
  useEffect(() => {
    dispatch(setIsSideBarOpen(true));
  }, []);

  return (
    <div className="relative ">
      <div className="flex space-x-3  w-[82vw] overflow-x-scroll no-scrollbar fixed top-14 bg-[#0f0f0f] text-white z-20">
        {terms.map((p, i) => (
          <button
            className={`rounded-lg  px-3 py-1.5 my-3 text-sm whitespace-nowrap ${
              term === p.name ? "bg-white text-neutral-800" : "bg-neutral-800"
            }`}
            key={i}
            onClick={() => setTerm(p.name)}
          >
            {p.name}
          </button>
        ))}
        <div className="fixed right-0 w-32 h-14 flex justify-end items-center z-20">
          <div className="bg-gradient-to-r from-transparent to-[#0f0f0f] w-10 h-full"></div>
          <div className="bg-[#0f0f0f] h-full pr-6 flex items-center">
            <IconButton>
              <SlArrowRight size={16} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4  flex-1 text-white pt-9">
        {data?.items?.map((video, i) => (
          <VideoCard videoData={video} key={i} />
        ))}
        {/* {videos?.map((video, i) => (
          <VideoCard videoData={video} key={i} />
        ))} */}
      </div>
    </div>
  );
};

export default Feed;
