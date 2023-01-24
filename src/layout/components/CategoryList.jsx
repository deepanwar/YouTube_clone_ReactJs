import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/video/videoSlice";

const CategoryList = ({ category, title, subscriptions, home }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.video);
  const listClasses =
    "flex items-center space-x-5 py-2 px-3 rounded-lg hover:bg-[#272727] cursor-pointer";
  return (
    <>
      <ul className="text-white py-3 ">
        {title && <h3 className="mb-2 px-4">{title}</h3>}
        {category.map((item) => (
          <li
            key={item.name}
            className={`${listClasses} ${
              selectedCategory === item.name
                ? "bg-[#272727] hover:bg-[#3d3d3d]"
                : ""
            }`}
            onClick={() => dispatch(changeCategory(item.name))}
          >
            {subscriptions ? (
              <div className="w-6 h-6 rounded-full bg-[#202020]" />
            ) : (
              <item.icon className="w-6 h-6" />
            )}
            <p className="text-sm">{item.name}</p>
          </li>
        ))}
        {subscriptions && (
          <li
            className={`${listClasses} ${
              selectedCategory === "Browse Channels"
                ? "bg-[#272727] hover:bg-[#3d3d3d]"
                : ""
            }`}
            onClick={() => dispatch(changeCategory(item.name))}
          >
            <BsPlusCircle size={20} />
            <p className="text-sm">Browse Channels</p>
          </li>
        )}

        {isShowMore &&
          [1, 2, 3, 4, 5].map((item) => (
            <li className={`${listClasses}`} key={item}>
              <div className="w-6 h-6 rounded-full bg-[#202020] " />
              <div className="w-[100px] h-5 rounded-full bg-[#202020]" />
            </li>
          ))}
        {home && (
          <li
            className={`${listClasses}`}
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? (
              <>
                <IoIosArrowUp size={20} />
                <p className="text-sm">Show Less</p>
              </>
            ) : (
              <>
                <IoIosArrowDown size={20} />
                <p className="text-sm">Show More</p>
              </>
            )}
          </li>
        )}
      </ul>
    </>
  );
};

export default CategoryList;
