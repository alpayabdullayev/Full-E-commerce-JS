import React from "react";
import Button from "../button";

const LoginInForm = () => {
  return (
    <div className="flex flex-col justify-center px-12 xl:px-40 lg:px-20 md:px-24 py-10 md:py-0 ">
      <div className="">
        <h3 className="text-2xl md:text-4xl  pb-4 font-bold">
          Log in to Exclusive
        </h3>
        <p className="">Enter your details below</p>
      </div>
      <div className="py-8">
        <form className="flex gap-14 flex-col pb-6">
          <div className="border-bottom">
            <input type="text" placeholder="Email" className="outline-none" />
          </div>
          <div className="border-bottom">
            <input
              type="text"
              placeholder="Password"
              className="outline-none"
            />
          </div>
        </form>
        <div className="flex justify-between pt-12 gap-4">
          <Button bgPrimary={true} text={"Log In"}/>
          <button className="text-secondary">
            Forget Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginInForm;
