import React from "react";
import Button from "../button";
import { useDispatch, useSelector } from "react-redux";

const BasketTotal = () => {
    const basket = useSelector((state) => state.basketS.value);

    const totalPrice = basket.reduce((acc, item) => {
        return acc + item.count * item.price;
    }, 0);

    return (
        <>
            <section id="baskettotal" className="py-10 ">
                <div className="wrapper flex md:flex-row items-start justify-center md:justify-between w-full flex-wrap gap-6">
                    <div className="flex gap-4 items-center">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="border border-solid border-black outline-none py-4 pl-4 rounded-md"
                        />
                        <div className="">
                            <Button text={"Apply Coupon"} bgPrimary={true} />
                        </div>
                    </div>
                    <div className="border-solid border md:w-4/12 w-full border-black ">
                        <div className="py-[32px] px-[24px]">
                            <h1 className="font-bold text-3xl">Cart Total</h1>
                            <div className="flex justify-between items-center gap-2 py-4">
                                <p>Subtotal</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div className="flex justify-between items-center gap-2 py-4">
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            <div className="flex justify-between items-center gap-2 py-4">
                                <p>Total</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div className="flex justify-center w-full">
                                <Button text={"Procees to checkout"} bgPrimary={true} wFull={"w-full"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BasketTotal;
