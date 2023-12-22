import React from "react";
import Button from "../button";
import LoginRegisterImg from "../loginRegisterImg";
import LoginInForm from "../loginForm";

const LogInSection = () => {
  return (
    <section id="sign-in" className=" pt-16 pb-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <LoginRegisterImg />
        <LoginInForm />
      </div>
    </section>
  );
};

export default LogInSection;
