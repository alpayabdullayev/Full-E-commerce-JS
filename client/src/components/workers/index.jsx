import React from "react";
import worker1 from "../../assets/imgs/workers/worker1.png";
const Workers = () => {
  return (
    <>
      <section id="py-20">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-12 py-6">
            <div className="group ">
              <div className="bg-search overflow-hidden group-hover:scale-110 duration-300 flex flex-col justify-center items-center pt-[37px] px-[67px]">
                <img src={worker1} alt=""  className="object-cover transition-all"/>
              </div>
              <div className="py-4">
                <h3 className="text-xl font-bold">Tom Cruise</h3>
                <p>Founder & Chairman</p>
              </div>
            </div>
            <div className="group overflow-hidden">
              <div className="bg-search group-hover:scale-110 duration-300 flex flex-col justify-center items-center pt-[37px] px-[67px]">
                <img src={worker1} alt=""  className="object-cover"/>
              </div>
              <div className="py-4">
                <h3 className="text-xl font-bold">Tom Cruise</h3>
                <p>Founder & Chairman</p>
              </div>
            </div>
            <div className="group overflow-hidden">
              <div className="bg-search group-hover:scale-110 duration-300 flex flex-col justify-center items-center pt-[37px] px-[67px]">
                <img src={worker1} alt=""  className="object-cover"/>
              </div>
              <div className="py-4">
                <h3 className="text-xl font-bold">Tom Cruise</h3>
                <p>Founder & Chairman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workers;
