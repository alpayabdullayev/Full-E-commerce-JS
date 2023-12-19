import React from "react";
import { NavLink } from "react-router-dom";
import SearchImg from "../../assets/icons/Seacrh.svg";
import WishlistImg from "../../assets/icons/Basket.svg";
import BasketImg from "../../assets/icons/Wishlist.svg";
import { FaBars } from "react-icons/fa";
import "./index.scss"

const Navbar = () => {
  return (
    <>
      <nav className='border-b border-solid border-black border-opacity-30'>
        <div className="wrapper">
          <div className="navbar d-flex  h-16">
            <div>
              <h1 className="h11 font-bold text-2xl">Exclusive</h1>
            </div>

            <ul className="nav-links hidden lg:flex gap-12 ml-12">
              <li>
                <NavLink activeclassname={"active"} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/contact"}>About</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/signin"}>Sign In</NavLink>
              </li>
            </ul>

            <div className="searchIcons d-flex gap-5">
              <div className="gap-4 bg-search hidden md:flex">
                <input
                  className="text-xs p-2 w-full bg-search outline-none  "
                  type="text"
                  placeholder="What are you looking for?"
                />
                <img src={SearchImg} alt="" />
              </div>
              <div className="clickBtn d-flex gap-2">
                <div className="cursor-pointer">
                  <img src={WishlistImg} alt="" />
                </div>
                <div className="cursor-pointer">
                  <img src={BasketImg} alt="" />
                </div>
                <div className="hamburger md:hidden sm:flex">
                  <FaBars />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
