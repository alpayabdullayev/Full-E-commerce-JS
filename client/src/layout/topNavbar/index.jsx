import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss"

const TopNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
      console.log("salam");
    };
  return (
    <>
      <div className="bg-black h-[48px] hidden lg:block text-white text-md py-[12px]">
        <div className="wrapper">
          <div className="flex justify-between ">
            <div className="flex gap-2 justify-center mx-auto">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <NavLink to={"/shop"} className=" ml-2 ">
                ShopNow
              </NavLink>
            </div>
            <div className="relative cursor-pointer">
            <p className="flex items-center text-right" onClick={handleClick}>
              English
            </p>

            <div className={`changeLang   ${isOpen ? "isOpen" : ""}   `}> 
              <ul>
                <li>EN</li>
                <li>AZE</li>
                <li>RUS</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
