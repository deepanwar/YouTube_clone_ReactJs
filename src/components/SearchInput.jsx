import React from "react";
import { SearchSvg } from "../assets";

const SearchInput = () => {
  return (
    <div className="border border-[#303030] rounded-full overflow-hidden flex-1 flex">
      <input
        type="search"
        className="bg-transparent outline-none flex-1 px-4 py-2"
        placeholder="Search"
      />
      <div className="px-5 bg-[#222222] flex items-center  ">
        <SearchSvg />
      </div>
    </div>
  );
};

export default SearchInput;
