import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import VideoCard from "../components/VideoCard";
import { useGetNewVideosQuery } from "../redux/services/youtubeApi";
import { setIsSideBarOpen } from "../redux/utils/utilsSlice";

const videos = new Array(24).fill("mohan");
const Feed = () => {
  const dispatch = useDispatch();
  // const { data, isFetching } = useGetNewVideosQuery();
  // console.log(data);
  useEffect(() => {
    dispatch(setIsSideBarOpen(true))
  }, []);

  return (
    <div className="relative ">
      <div className="flex space-x-3 py-3 w-[82vw] overflow-x-scroll no-scrollbar fixed top-14 bg-[#0f0f0f] text-white">
        {videos.map((p, i) => (
          <p className="rounded-lg bg-neutral-800 px-3 py-1 text-sm" key={i}>
            {p}
          </p>
        ))}
        <div className="absolute right-0 top-0 bottom-0  bg-gradient-to-r from-transparent to-[#0f0f0f]  w-32 flex justify-end items-center pr-4 ">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 flex-1 text-white pt-9">
        {/* {data?.items?.map((video, i) => (
          <VideoCard videoData={video} key={i} />
        ))} */}
        {videos?.map((video, i) => (
          <VideoCard videoData={video} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
