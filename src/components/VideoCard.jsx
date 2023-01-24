import React from "react";
import { Link } from "react-router-dom";
// components
import TimeAgo from "./TimeAgo";
import IconButton from "./IconButton";
// images
import demoSq from "../assets/demoSquare.png";
// icons
import { demoVideo, DotsSvg } from "../assets";
import { BsDot } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import WatchLaterBox from "./WatchLaterBox";

const VideoCard = ({ videoData: { snippet }, flex, imgWidth }) => {
  // console.log(videoData);
  return (
    <Link
      to={`/video/${12} `}
      className={`group/card relative flex gap-3 ${
        flex ? "flex-row" : "flex-col"
      }`}
    >
      <div className="relative">
        <img
          src={snippet?.thumbnails?.medium?.url || demoVideo}
          className="bg-neutral-800 aspect-video rounded-lg"
          width={imgWidth}
          alt=""
        />
        <div className="absolute right-1 top-1 hidden group-hover/card:block">
          <WatchLaterBox />
        </div>
      </div>
      {/* <div className="bg-neutral-800 aspect-video rounded-lg"></div> */}
      <div className=" flex space-x-3 pr-9 relative">
        {!flex && (
          <img
            src={demoSq}
            alt="avatar"
            className="h-10 aspect-square bg-neutral-800 rounded-full"
          />
        )}

        {/* <div className="h-10 aspect-square bg-neutral-800 rounded-full" /> */}
        <div className="flex-1">
          <h2 className="text-sm">
            {snippet?.title.slice(0, 50) || "Video Title"}...
          </h2>
          <div className="text-xs text-neutral-400 inline-flex cursor-pointer">
            <p className="hover:text-white">
              {snippet?.channelTitle || "Channel Name"}
            </p>
            <IoIosCheckmarkCircle size={15} className="ml-1 shrink-0" />
          </div>
          <p className="text-xs text-neutral-400 flex items-center ">
            1.6M Views <BsDot size={18} />{" "}
            <TimeAgo timestamp={snippet?.publishedAt} />
          </p>
        </div>
        {/* <div className="absolute right-0 active:bg-[#272727] p-2 rounded-full" >
          
        </div> */}
        <IconButton className="absolute right-0 hidden group-hover/card:block">
          <DotsSvg />
        </IconButton>
      </div>
    </Link>
  );
};

export default VideoCard;
