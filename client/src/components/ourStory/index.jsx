import React from "react";
import Woman from "../../assets/imgs/productSVG/womanahahah.png"

const OurStory = () => {
  return (
    <>
      <section id="ourStory" className="py-20 w-full min-h-screen">
        <div className="wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
            <div>
              <h1 className=" font-medium pb-6 [font-size:_clamp(2em,5vw,10em)]">Our Story</h1>
              <p className="py-4 ">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping <br /> makterplace with an active presense in Bangladesh.
                Supported <br /> by wide range of tailored marketing, data and service
                solutions, <br /> Exclusive has 10,500 sallers and 300 brands and
                serves 3 <br /> millioons customers across the region.{" "}
              </p>
              <p className="">
                Exclusive has more than 1 Million products to offer, growing at
                a <br /> very fast. Exclusive offers a diverse assotment in categories <br />
                ranging from consumer.
              </p>
            </div>
            <div>
                <img src={Woman} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;
