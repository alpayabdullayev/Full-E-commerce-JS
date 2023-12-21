import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay} from 'swiper/modules';

import PsImg from "../../assets/imgs/PS.svg";
import { FaStar } from "react-icons/fa";
import "./index.scss";
import { FaRegHeart } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import MainCard from "../mainCard";

const TodaySlider = () => {
    const breakpoints = {
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    };
    return (
        <>
            <div className="py-6">
                <Swiper
                    slidesPerView={5}
                    breakpoints={breakpoints}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                      }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="group card">
                            <div className="cardImg bg-imgBg p-[50px] relative">
                                <img src={PsImg} alt="" />
                                <div className="discount absolute top-[12px] left-[12px] bg-secondary text-white py-[4px] px-[12px]  text-sm rounded-sm">
                                    -40%
                                </div>
                                <div className="addToCart absolute bottom-0 bg-black w-full left-0 text-white text-center py-[8px] z-10">
                                    <button>Add To Cart</button>
                                </div>
                                <div className="rightBtns  absolute top-[12px] right-[12px] flex flex-col gap-2">
                                    <button className=" btn-groups">
                                        <FaRegHeart />
                                    </button>
                                    <button className="btn-groups"><GoEye /></button>
                                </div>


                            </div>
                            <div className="cardBody pt-4">
                                <p className="font-bold">HAVIT HV-G92 Gamepad</p>
                                <p>
                                    $120{" "}
                                    <span>
                                        <del>$169</del>
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
                    </SwiperSlide>
                    <SwiperSlide>
                      <MainCard img={PsImg} discount={"-40$"} name={"Alpay"} discountPirce={31} originalPrice={102} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="cardImg bg-imgBg p-[50px] relative">
                                <img src={PsImg} alt="" />
                                <div className="discount absolute top-[12px] left-[12px] bg-secondary text-white py-[4px] px-[12px]  text-sm rounded-sm">
                                    -40%
                                </div>
                                <div className="addToCart absolute bottom-0 bg-black w-full left-0 text-white text-center py-[8px] z-10">
                                    <button>Add To Cart</button>
                                </div>
                                <div className="rightBtns absolute top-[12px] right-[12px] flex flex-col gap-2">
                                    <button className="btn-groups">
                                        <FaRegHeart />
                                    </button>
                                    <button className="btn-groups"><GoEye /></button>
                                </div>


                            </div>
                            <div className="cardBody pt-4">
                                <p className="font-bold">HAVIT HV-G92 Gamepad</p>
                                <p>
                                    $120{" "}
                                    <span>
                                        <del>$169</del>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="cardImg bg-imgBg p-[50px] relative">
                                <img src={PsImg} alt="" />
                                <div className="discount absolute top-[12px] left-[12px] bg-secondary text-white py-[4px] px-[12px]  text-sm rounded-sm">
                                    -40%
                                </div>
                                <div className="addToCart absolute bottom-0 bg-black w-full left-0 text-white text-center py-[8px] z-10">
                                    <button>Add To Cart</button>
                                </div>
                                <div className="rightBtns absolute top-[12px] right-[12px] flex flex-col gap-2">
                                    <button className="btn-groups">
                                        <FaRegHeart />
                                    </button>
                                    <button className="btn-groups"><GoEye /></button>
                                </div>


                            </div>
                            <div className="cardBody pt-4">
                                <p className="font-bold">HAVIT HV-G92 Gamepad</p>
                                <p>
                                    $120{" "}
                                    <span>
                                        <del>$169</del>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="cardImg bg-imgBg p-[50px] relative">
                                <img src={PsImg} alt="" />
                                <div className="discount absolute top-[12px] left-[12px] bg-secondary text-white py-[4px] px-[12px]  text-sm rounded-sm">
                                    -40%
                                </div>
                                <div className="addToCart absolute bottom-0 bg-black w-full left-0 text-white text-center py-[8px] z-10">
                                    <button>Add To Cart</button>
                                </div>
                                <div className="rightBtns absolute top-[12px] right-[12px] flex flex-col gap-2">
                                    <button className="btn-groups">
                                        <FaRegHeart />
                                    </button>
                                    <button className="btn-groups"><GoEye /></button>
                                </div>


                            </div>
                            <div className="cardBody pt-4">
                                <p className="font-bold">HAVIT HV-G92 Gamepad</p>
                                <p>
                                    $120{" "}
                                    <span>
                                        <del>$169</del>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="cardImg bg-imgBg p-[50px] relative">
                                <img src={PsImg} alt="" />
                                <div className="discount absolute top-[12px] left-[12px] bg-secondary text-white py-[4px] px-[12px]  text-sm rounded-sm">
                                    -40%
                                </div>
                                <div className="addToCart absolute bottom-0 bg-black w-full left-0 text-white text-center py-[8px] z-10">
                                    <button>Add To Cart</button>
                                </div>
                                <div className="rightBtns absolute top-[12px] right-[12px] flex flex-col gap-2">
                                    <button className="btn-groups">
                                        <FaRegHeart />
                                    </button>
                                    <button className="btn-groups"><GoEye /></button>
                                </div>


                            </div>
                            <div className="cardBody pt-4">
                                <p className="font-bold">HAVIT HV-G92 Gamepad</p>
                                <p>
                                    $120{" "}
                                    <span>
                                        <del>$169</del>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="cardImg bg-imgBg p-[50px] relative">
                                <img src={PsImg} alt="" />
                                <div className="discount absolute top-[12px] left-[12px] bg-secondary text-white py-[4px] px-[12px]  text-sm rounded-sm">
                                    -40%
                                </div>
                                <div className="addToCart absolute bottom-0 bg-black w-full left-0 text-white text-center py-[8px] z-10">
                                    <button>Add To Cart</button>
                                </div>
                                <div className="rightBtns absolute top-[12px] right-[12px] flex flex-col gap-2">
                                    <button className="btn-groups">
                                        <FaRegHeart />
                                    </button>
                                    <button className="btn-groups"><GoEye /></button>
                                </div>


                            </div>
                            <div className="cardBody pt-4">
                                <p className="font-bold">HAVIT HV-G92 Gamepad</p>
                                <p>
                                    $120{" "}
                                    <span>
                                        <del>$169</del>
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
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default TodaySlider;
