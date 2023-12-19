import React from "react";
import MainCard from "../mainCard";
import PsImg from "../../assets/imgs/PS.svg";
import Kurtks from "../../assets/imgs/productSVG/kurtka.svg"

const BestSelingContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-12 py-6">
      <div className=" ">
        <MainCard
          className=""
          img={Kurtks}
          discount={"-40$"}
          name={"Alpay"}
          discountPirce={31}
          originalPrice={102}
        />
      </div>
      <div className=" ">
        <MainCard
          img={PsImg}
          discount={"-40$"}
          name={"Alpay"}
          discountPirce={31}
          originalPrice={102}
        />
      </div>
      <div className=" ">
        <MainCard
          img={PsImg}
          discount={"-40$"}
          name={"Alpay"}
          discountPirce={31}
          originalPrice={102}
        />
      </div>
      <div className=" ">
        <MainCard
          img={PsImg}
          discount={"-40$"}
          name={"Alpay"}
          discountPirce={31}
          originalPrice={102}
        />
      </div>
    </div>
  );
};

export default BestSelingContent;
