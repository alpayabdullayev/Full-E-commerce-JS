import React from "react";
import MainCard from "../mainCard";
import Kurtks from "../../assets/imgs/productSVG/kurtka.svg";

const WishlistProducts = () => {
  return (
    <>
      <section id="wishlistProducts">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-12 py-6">
          <MainCard
            className=""
            img={Kurtks}
            discount={"-40$"}
            name={"Alpay"}
            discountPirce={31}
            originalPrice={102}
            wishlist
          />
          <MainCard
            className=""
            img={Kurtks}
            discount={"-40$"}
            name={"Alpay"}
            discountPirce={31}
            originalPrice={102}
            wishlist
          />
          <MainCard
            className=""
            img={Kurtks}
            discount={"-40$"}
            name={"Alpay"}
            discountPirce={31}
            originalPrice={102}
            wishlist
          />
          <MainCard
            className=""
            img={Kurtks}
            discount={"-40$"}
            name={"Alpay"}
            discountPirce={31}
            originalPrice={102}
            wishlist
          />
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistProducts;
