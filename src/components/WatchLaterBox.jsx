import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { RxClock } from "react-icons/rx";

const WatchLaterBox = () => {
  const [isAdded, setIsAdded] = useState(false);
  return (
    <div
      className="flex group/watch p-1 rounded bg-neutral-900/80 items-center"
      onClick={(e) => {
        e.stopPropagation();
        setIsAdded(!isAdded);
      }}
    >
      <p className="text-xs hidden mx-1 group-hover/watch:block">
        {isAdded ? "Added" : "Watch Later"}
      </p>
      {isAdded ? (
        <IoCheckmark size={24} className="shrink-0 " />
      ) : (
        <RxClock size={24} className="shrink-0 " />
      )}
    </div>
  );
};

export default WatchLaterBox;

// TODO: onclick => added /Toggle to the watch later list
