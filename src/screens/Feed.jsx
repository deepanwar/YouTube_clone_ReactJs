import React, { useState } from "react";
import { IoIosCheckmarkCircle, IoIosArrowForward } from "react-icons/io";

const videos = new Array(24).fill("mohan");
const Feed = () => {
  console.log(videos);
  return (
    <div className="relative ">
      <div className="flex space-x-3 py-3 w-[82vw] overflow-x-scroll no-scrollbar fixed top-14 bg-[#0f0f0f] text-white">
        {videos.map((p) => (
          <p className="rounded-lg bg-neutral-800 px-3 py-1 text-sm">{p}</p>
        ))}
        <div className="absolute right-0 top-0 bottom-0  bg-gradient-to-r from-transparent to-[#0f0f0f]  w-32 flex justify-end items-center pr-4 ">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 flex-1 text-white pt-9">
        {videos.map((video, i) => (
          <div key={i} className="">
            {/* <img src="" alt="" /> */}
            <div className="bg-neutral-800 aspect-video rounded-lg"></div>
            <div className="py-3 flex space-x-3 ">
              <div className="h-10 aspect-square bg-neutral-800 rounded-full" />
              <div className="flex-1">
                <h2 className="text-sm">
                  Lorem ipsum dolor, sit amet consect adipisicing elit.
                </h2>
                <p className="text-xs text-neutral-400 inline-flex">
                  Lorem ipsum dolor sit amet.
                  <IoIosCheckmarkCircle size={15} className="ml-1" />
                </p>
                <p className="text-xs text-neutral-400 ">
                  1.6M Views &sdot; 1 month ago
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
