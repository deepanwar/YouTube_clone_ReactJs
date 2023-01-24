import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// icons/image
import { DotsSvg } from "../assets";
import { demoSq } from "../utils/constant";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
// components
import { IconButton } from "../components";
import CommentSection from "../components/CommentSection";
import VideoCard from "../components/VideoCard";
// other
import { setIsSideBarOpen } from "../redux/utils/utilsSlice";

const videos = new Array(24).fill("mohan");

const VideoDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsSideBarOpen(false));
  }, []);
  return (
    <div className="flex flex-col lg:flex-row flex-1 max-w-[1300px] mx-auto">
      {/* video side */}
      <div className="flex-1 p-4">
        <div className="aspect-video bg-neutral-500 rounded grid place-items-center shrink-0">
          Video
        </div>

        {/* below video */}
        <h2 className="text-xl mt-3">Video Title</h2>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            <img src={demoSq} alt="" className="w-10 h-10 rounded-full" />

            <div className="flex justify-between flex-col ml-3">
              <h2>Channel Name</h2>
              <p className="text-xs text-neutral-700">230K Subscribers</p>
            </div>
            <div className="grid place-items-center ml-6">
              <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium ">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex space-x-2">
            <div className="rounded-full bg-[#222222] shrink-0 p-2 hover:bg-[#272727] flex">
              <div className="flex px-2 border-r border-neutral-700 space-x-2 ">
                <AiOutlineLike size={24} />
                <span>345k</span>
              </div>

              <div className="rotate-180 px-2 shrink-0">
                <AiOutlineLike size={24} />
              </div>
            </div>
            <IconButton className="bg-[#222222]">
              <RiShareForwardLine size={24} />
              <p className="font-medium pr-2">Share</p>
            </IconButton>
            <IconButton className="bg-[#222222] rotate-90">
              <DotsSvg />
            </IconButton>
          </div>
        </div>

        {/* discription */}
        <div className="rounded-lg p-3 bg-[#222222] text-sm mt-3">
          <h2 className="font-semibold">1.3M views 2 weeks ago</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            sequi illum nemo commodi magni voluptates?
          </p>
          <button className="mt-9">Show More</button>
        </div>
        <CommentSection />
      </div>

      {/* right side bar */}
      <div className="w-[400px] py-4">
        <div className="space-y-3">
          {videos?.map((video, i) => (
            <VideoCard videoData={video} key={i} flex imgWidth="168px" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
