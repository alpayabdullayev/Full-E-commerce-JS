import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import AppleImg from "../../assets/imgs/Apple.svg";
import IphoneSvg from "../../assets/imgs/iphone.svg";
import "./index.scss";
import { MdArrowForward } from "react-icons/md";
const HeaderSlider = () => {
    return (
        <>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper pt-10"
            >
                <SwiperSlide className="bg-black text-white ">
                    <div className="flex flex-wrap justify-center items-center ">
                        <div className=" py-[10px] ">
                            <div className="flex gap-6 items-center">
                                <div className="w-[40px] h-[49px]">
                                    <img src={IphoneSvg} alt="" />
                                </div>
                                <p className="font30xl">iPhone 14 Series</p>
                            </div>
                            <div>
                                <h1 className="textIphone font-[600] tracking-wider mt-4">
                                    Up to 10% <br /> off Voucher
                                </h1>
                                <div className="flex gap-4 mt-4">
                                    <button className="flex items-center gap-4 border-b border-solid border-white border-opacity-30">
                                        Shop Now
                                        <span className="flex items-center justify-center text-2xl">
                                            <MdArrowForward />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[10px] lg:w-[50%] w-full">
                            <img src={AppleImg} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-black text-white ">
                    <div className="flex flex-wrap justify-center items-center ">
                        <div className=" py-[10px] ">
                            <div className="flex gap-6 items-center">
                                <div className="w-[40px] h-[49px]">
                                    <img src={IphoneSvg} alt="" />
                                </div>
                                <p className="font30xl">iPhone 14 Series</p>
                            </div>
                            <div>
                                <h1 className="textIphone font-[600] tracking-wider mt-4">
                                    Up to 10% <br /> off Voucher
                                </h1>
                                <div className="flex gap-4 mt-4">
                                    <button className="flex items-center gap-4 border-b border-solid border-white border-opacity-30">
                                        Shop Now
                                        <span className="flex items-center justify-center text-2xl">
                                            <MdArrowForward />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[10px] lg:w-[50%] w-full">
                            <img src={AppleImg} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HeaderSlider;
