import React from "react";
import { demoVideo, DotsSvg } from "../assets";
import { IconButton } from "../components";
import { RxShuffle } from "react-icons/rx";
import { IoIosPlay } from "react-icons/io";
import { HiBars2, HiBars3BottomLeft } from "react-icons/hi2";
import { fakeArray } from "../utils/constant";
import { useSelector } from "react-redux";
import TimeAgo from "../components/TimeAgo";

const WatchLater = () => {
  const watchLaterVideos = useSelector((state) => state.video.watchLater);
  console.log(watchLaterVideos);
  // watchLaterVideos[0].snippet?.thumbnails?.medium?.url
  return (
    <div className="flex space-x-1 mt-3">
      <div className="rounded-lg bg-gradient-to-b from-slate-100 to-black h-[82vh] w-[380px] py-7 px-6 fixed ">
        {/* <div className=" aspect-video rounded-lg mb-3" style={{
            backgroundImage: `url(${
              watchLaterVideos[0]?.snippet?.thumbnails?.medium?.url || demoVideo
            })`,
          }}></div> */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-50 rounded-lg"
          style={{
            backgroundImage: `url(${
              watchLaterVideos[0]?.snippet?.thumbnails?.medium?.url || demoVideo
            })`,
          }}
        ></div>
        <div className="absolute inset-0 -z-10 rounded-lg backdrop-blur-xl bg-gradient-to-b from-slate-100/10 to-[#0f0f0f] "></div>
        <div className="z-20">
          {/* <img
            src={watchLaterVideos[0]?.snippet?.thumbnails?.medium?.url}
            className="bg-neutral-800 aspect-video rounded-lg mb-3"
            // width="160px"
            alt="thumbnail"
          /> */}
          <div
            className=" aspect-video rounded-lg mb-3 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${
                watchLaterVideos[0]?.snippet?.thumbnails?.medium?.url ||
                demoVideo
              })`,
            }}
          ></div>
          <h2 className="text-2xl font-bold text-white mb-4">Watch Later</h2>
          <p className="font-semibold">Deepak Kumar</p>
          <p className="text-sm text-neutral-200 mb-2 flex">
            {watchLaterVideos.length} videos &nbsp; No views &nbsp; Updated
            today
          </p>
          <IconButton className="bg-white/10 hover:bg-white/20 mb-4">
            <DotsSvg />
          </IconButton>
          <div className="flex gap-3">
            <button className="bg-white text-black flex-1 rounded-btn hover:bg-white/90">
              <IoIosPlay size={24} />
              <p className="font-medium ">Play all</p>
            </button>
            <button className="bg-white/10 flex-1  rounded-btn hover:bg-white/20">
              <RxShuffle size={24} />
              <p className="font-medium ">Shuffle</p>
            </button>
          </div>
        </div>
      </div>

      {/* left side */}
      <div className="flex-1 pl-[380px]">
        <p className="flex space-x-2.5 pl-9 pt-4 pb-2">
          <HiBars3BottomLeft size={24} /> <span>Sort</span>
        </p>
        <div className="space-y-2">
          {/* {watchLaterVideos?.map((item, i) => (
            <div className="flex p-2 hover:bg-white/10 rounded-lg space-x-2 cursor-pointer">
              <div className=" flex items-center">
                <HiBars2 size={24} />
              </div>
              <img
                src={item?.snippet?.thumbnails?.medium?.url || demoVideo}
                className="bg-neutral-800 aspect-video rounded-lg"
                width="160px"
                alt=""
              />
              <div className="">
                <h2 className="text-base mb-2">{item?.snippet?.title}</h2>
                <p className="hover:text-white text-xs text-neutral-400 cursor-pointer">
                  {item?.snippet?.channelTitle} • 1.6M Views • month ago{" "}
                </p>
              </div>
            </div>
          ))} */}
          {watchLaterVideos?.map((item, i) => {
            const { snippet } = item;
            return (
              <div className="flex p-2 pr-5 hover:bg-white/10 rounded-lg space-x-2 cursor-pointer relative group">
                <div className=" flex items-center">
                  <HiBars2 size={24} />
                </div>
                <img
                  src={snippet?.thumbnails?.medium?.url || demoVideo}
                  className="bg-neutral-800 aspect-video rounded-lg"
                  width="160px"
                  alt=""
                />
                <div className="">
                  <h2 className="text-base mb-2">
                    {snippet?.title.slice(0, 100) || "Video Title"}
                  </h2>
                  <div className="flex">
                    <p className="hover:text-white text-xs text-neutral-400 cursor-pointer">
                      {snippet?.channelTitle}
                    </p>
                    <p className=" text-xs text-neutral-400">
                      &nbsp; • 1.6M Views • &nbsp;
                      <TimeAgo timestamp={snippet?.publishedAt} />
                    </p>
                  </div>
                </div>
                <div className="absolute right-4 top-0 bottom-0 group-hover:flex items-center hidden">
                  <DotsSvg />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
