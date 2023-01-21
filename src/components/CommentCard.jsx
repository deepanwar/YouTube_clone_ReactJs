import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { DotsSvg } from "../assets";
import { demoSq } from "../utils/constant";
import IconButton from "./IconButton";

const CommentCard = () => {
  return (
    <div className="flex text-sm space-x-4 mt-4 group pr-7">
      <img src={demoSq} alt="avatar" className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <h3>
          Lorem ipsum dolor.{" "}
          <span className="text-xs text-neutral-400 ml-1">3 weeks ago</span>
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione enim
          dignissimos libero commodi labore totam!
        </p>
        {/* rections */}
        <div className="flex items-center space-x-2 mt-1">
          <div className="flex items-center">
            <IconButton className="">
              <AiOutlineLike size={20} />
            </IconButton>
            <span>22</span>
          </div>

          <IconButton className="rotate-180">
            <AiOutlineLike size={20} />
          </IconButton>
          <IconButton className="text-xs">Reply</IconButton>
        </div>
      </div>
      <div className="hidden group-hover:block">
        <DotsSvg />
      </div>
    </div>
  );
};

export default CommentCard;
