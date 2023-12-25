import React from "react";
import Qr from '../../assets/icons/Qr.svg'
import PStore from '../../assets/icons/PStore.svg'
import AStore from '../../assets/icons/AStore.svg'

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-black pt-20 text-white">
        <div className="wrapper pb-20">
          <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-24">
            <div className="">
              <h3 className="text-white text-2xl font-bold">Exclusive</h3>
              <ul className="py-6 flex flex-col gap-4">
              <li className="font-medium text-xl">Subscribe</li>
              <li className="a font-medium">Get 10% off your first order</li>
              </ul>
              <div className="">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="py-3 px-4 bg-black focus:text-white duration-300  rounded-md  outline-none  border-2 border-white opacity-50"
                />
              </div>
            </div>
            <div className="">
              <h3 className="text-white text-2xl font-bold">Support</h3>
              <ul className="flex flex-col gap-4 py-4">
              <li>
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-white text-xl font-bold">Account</h3>
              <ul className="flex flex-col gap-4 py-4">
              <p className=" font-medium">My Account</p>
              <p className="font-medium">Login / Register</p>
              <p className="font-medium">Cart</p>
              <p className="font-medium">Wishlist</p>
              <p className="font-medium">Shop</p>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-white text-2xl font-bold">Quick Link</h3>
              <ul className="flex flex-col gap-4 py-4">
                <li className="">Privacy Policy</li>
                <li className="">Terms Of Use</li>
                <li className="">FAQ</li>
                <li className="">Contact</li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-white text-2xl font-bold">Download App</h3>
              <p className="py-6">Save $3 with App New User Only</p>
              <div className="flex  gap-4">
                <div>
                  <img src={Qr} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                  <img src={PStore} alt="" />
                  <img src={AStore} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
