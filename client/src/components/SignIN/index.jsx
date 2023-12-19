import React from "react";
import LoginRegisterImg from "../loginRegisterImg";
import SignInForm from "../signinForm";

const SignInSection = () => {
  return (
    <section id="signin" className="py-20">
      <div className="flex items-center ">
        <div className="flex gap-[130px] flex-wrap-reverse justify-center items-center">
          <LoginRegisterImg />
          <SignInForm />
        </div>
      </div>
    </section>
  );
};

export default SignInSection;
