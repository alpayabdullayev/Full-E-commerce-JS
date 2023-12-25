import React from "react";
import PS5 from "../../assets/imgs/productSVG/ps5.png";
import Woman from "../../assets/imgs/woman.svg"
import Duxi from "../../assets/imgs/duxi.png"



const FeaturedContent = () => {
  return (
    <>
      <div className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full bg-black  group  pt-[89px] px-[30px] rounded-md relative overflow-hidden ">
            <div className="group-hover:scale-110 duration-700">
              <img src={PS5} alt="" className="object-cover"/>
              <div className="absolute bottom-[10px] text-white">
                <p className="text-xl">PlayStation 5</p>
                <p className="my-2">Black and White version of the PS5 <br /> coming out on sale.</p>
                <a href="" className="">Shop Now</a>
              </div>
            </div>
          </div>

          <div className="grid grid-col-12  gap-4">
            <div className=" w-full col-span-12 max-h-[284px] flex justify-end items-center bg-black relative rounded-md">
                <img src={Woman} alt="" className=" bg-transparent" />
                <div className="a absolute bottom-[24px] left-[24px]  text-white ">
                    <p>Women’s Collections</p>
                    <p>Featured woman collections that <br /> give you another vibe</p>
                    <a href="">Shop Now</a>
                </div>
            </div>

            <div className=" col-span-12 md:col-span-6 w-full  "> 
                <div className="bg-black rounded-md py-[31px] px-[40px] flex justify-center items-center relative">
                    <img src={Duxi} alt="" />
                    <div className=" absolute bottom-[24px] left-[24px] text-white">
                        <p>Speakers</p>
                        <p className="text-lg md:text-xs">Amazon wireless speakers</p>
                        <a href="">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className=" w-full col-span-12 md:col-span-6 ">
                <div className="bg-black py-[31px] px-[40px] rounded-md flex justify-center items-center relative">
                    <img src={Duxi} alt="" />
                    <div className=" absolute bottom-[24px] left-[24px] text-white">
                        <p>Speakers</p>
                        <p className="text-lg md:text-xs">Amazon wireless speakers</p>
                        <a href="">Shop Now</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedContent;
