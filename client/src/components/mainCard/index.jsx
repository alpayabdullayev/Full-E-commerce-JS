import React from "react";
import { FaStar } from "react-icons/fa";

import { FaRegHeart } from "react-icons/fa";
import { GoEye } from "react-icons/go";

const MainCard = ({img,discount,name,discountPirce,originalPrice}) => {
  return (
    <div className="group card rounded-md"> 
      <div className="cardImg bg-imgBg p-[50px] relative rounded-md">
        <div className="flex justify-center items-center"><img  src={img} alt=""/>
            </div>
        <div className="group-hover:bg-indigo-700 discount absolute top-[12px] left-[12px] bg-secondary text-white py-[4px] px-[12px]  text-sm rounded-sm">
          {discount}
        </div>
        <div className="addToCart absolute bottom-0 bg-black w-full left-0 text-white text-center py-[8px] z-10">
          <button >Add To Cart</button>
        </div>
        <div className="rightBtns absolute top-[12px] right-[12px] flex flex-col gap-2">
          <button className="btn-groups">
            <FaRegHeart />
          </button>
          <button className="btn-groups">
            <GoEye />
          </button>
        </div>
      </div>
      <div className="cardBody pt-4">
        <p className="font-bold">{name}</p>
        <p>
          <span className="text-secondary">${discountPirce}</span>
          <span className="text-yellow-500">
            <del>${originalPrice}</del>
          </span>
        </p>
        <p>
          <span className="text-yellow-500 flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        </p>
      </div>
    </div>
  );
};

export default MainCard;
