import React from "react";
import { changeCategory } from "../../redux/video/videoSlice";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"

const ListItem = (item) => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.video);
  return (
    <li
      className={`  py-2 px-3 rounded-lg hover:bg-[#272727] cursor-pointer ${
        selectedCategory === item?.name ? "bg-[#272727] hover:bg-[#3d3d3d]" : ""
      }`}
      onClick={() => dispatch(changeCategory(item?.name))}
    >
      <Link to={item?.to} className="flex items-center space-x-5">
        {item?.icon ? (
          <item.icon className="w-6 h-6" />
        ) : (
          <div className="w-6 h-6 rounded-full bg-[#202020]" />
        )}
        {item?.name ? (
          <p className="text-sm">{item?.name}</p>
        ) : (
          <div className="w-[100px] h-5 rounded-full bg-[#202020]" />
        )}
      </Link>
    </li>
  );
};

export default ListItem;
