import React from "react";
import { demoVideo } from "../assets";
import { fakeArray } from "../utils/constant";

const History = () => {
  return (
    <div className="px-10 max-w-[1000px]">
      <h2 className="font-semibold mb-10">Watch History</h2>
      <div className="space-y-4">
        {fakeArray.map((item, i) => (
          <div className="flex space-x-4" key={i}>
            <img
              src={demoVideo}
              className="bg-neutral-800 aspect-video rounded-lg"
              width="246px"
              alt="thumb"
            />
            <div className="">
              <h2 className="text-lg mb-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, praesentium?...
              </h2>
              <p className="text-xs text-neutral-400 cursor-pointer mb-2">
                <span className="hover:text-white font-medium">Channel Name</span>
                {" "}• 1.6M Views
              </p>
              <p className="text-xs text-neutral-400 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                quisquam id temporibus est quaerat at incidunt recusandae omnis
                sed quam? Lorem ipsum, dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
