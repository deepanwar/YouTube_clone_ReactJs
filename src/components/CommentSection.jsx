import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import CommentCard from "./CommentCard";

const CommentSection = () => {
  return (
    <div>
      <div className="mt-6 mb-8">
        <div className="mb-6 flex text-sm space-x-9">
          <p className="text-base">390 comments</p>
          <p className="flex space-x-2.5">
            <HiBars3BottomLeft size={24} /> <span>Sort</span>
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="w-10 h-10 bg-sky-500 rounded-full grid place-items-center text-lg">
            D
          </div>
          <input
            type="text"
            className="bg-transparent text-sm border-b border-[#222222] outline-none flex-1"
            placeholder="Add a comment"
          />
        </div>
      </div>
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
};

export default CommentSection;
