import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import PhoneSvg from "../../assets/imgs/categoryImgs/phone.svg";
import "./index.scss"

const CategorySectionSlider = () => {
  const breakpoints = {
    1200: {
      slidesPerView: 6,
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
      <div className="py-12">
        <Swiper
          slidesPerView={6}
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
          modules={[]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="categoryCard  hover:bg-secondary duration-500 hover:fill-white ">
              <div className="categoryContent">
                <div className="categoryCardImg">
                  <img
                    src={PhoneSvg}
                    className="svgImage  hover:fill-white"  
                    alt=""
                   
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide> <div className="categoryCard  hover:bg-secondary duration-500 hover:fill-white ">
              <div className="categoryContent">
                <div className="categoryCardImg">
                  <img
                    src={PhoneSvg}
                    className="svgImage  hover:fill-white"  
                    alt=""
                   
                  />
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="categoryCard  hover:bg-secondary duration-500 hover:fill-white ">
              <div className="categoryContent">
                <div className="categoryCardImg">
                  <img
                    src={PhoneSvg}
                    className="svgImage  hover:fill-white"  
                    alt=""
                   
                  />
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="categoryCard  hover:bg-secondary duration-500 hover:fill-white ">
              <div className="categoryContent">
                <div className="categoryCardImg">
                  <img
                    src={PhoneSvg}
                    className="svgImage  hover:fill-white"  
                    alt=""
                   
                  />
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="categoryCard  hover:bg-secondary duration-500 hover:fill-white ">
              <div className="categoryContent">
                <div className="categoryCardImg">
                  <img
                    src={PhoneSvg}
                    className="svgImage  hover:fill-white"  
                    alt=""
                   
                  />
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="categoryCard  hover:bg-secondary duration-500 hover:fill-white ">
              <div className="categoryContent">
                <div className="categoryCardImg">
                  <img
                    src={PhoneSvg}
                    className="svgImage  hover:fill-white"  
                    alt=""
                   
                  />
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="categoryCard  hover:bg-secondary duration-500 hover:fill-white ">
              <div className="categoryContent">
                <div className="categoryCardImg">
                  <img
                    src={PhoneSvg}
                    className="svgImage  hover:fill-white"  
                    alt=""
                   
                  />
                </div>
              </div>
            </div></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CategorySectionSlider;
