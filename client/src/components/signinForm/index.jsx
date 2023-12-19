import React from "react";
import Button from "../button";

const SignInForm = () => {
  return (
    <div className="px-[130px]">
      <h4 className="">Create an account</h4>
      <p>Enter your details below</p>

      <form action="" className="py-10 w-full" >
        <div className="flex flex-col py-5 gap-8">
          <input className=" py-2  outline-none border-bottom" type="text" placeholder="Name"  />
          <input className="py-2   outline-none border-bottom" type="text" placeholder="Email or Phone Number" />
          <input className=" py-2 outline-none border-bottom" type="text" placeholder="Password" />
        </div>
        <Button text={"Create Account"} bgPrimary={true} />
      </form>
    </div>
  );
};

export default SignInForm;
