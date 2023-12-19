import React from "react";
import MainCard from "../mainCard";
import Kurtks from "../../assets/imgs/productSVG/kurtka.svg";
// import Countdown from "react-countdown";

const OurProductsContent = () => {
//   const Completionist = () => <span>You are good to go!</span>;
  

  

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-12 py-6">
        <MainCard
          className=""
          img={Kurtks}
          discount={"-40$"}
          name={"Alpay"}
          discountPirce={31}
          originalPrice={102}
        />
        <MainCard
          className=""
          img={Kurtks}
          discount={"-40$"}
          name={"Alpay"}
          discountPirce={31}
          originalPrice={102}
        />
        <MainCard
          className=""
          img={Kurtks}
          discount={"-40$"}
          name={"Alpay"}
          discountPirce={31}
          originalPrice={102}
        />
        <MainCard
          className=""
          img={Kurtks}
          discount={"-40$"}
          name={"Alpay"}
          discountPirce={31}
          originalPrice={102}
        />
         {/* <Countdown
    date={Date.now() + 5000 +5000}

  /> */}
      </div>
    </>
  );
};

export default OurProductsContent;
