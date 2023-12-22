import React, { useState } from "react";
import Button from "../button";
import Google from "../../assets/icons/Google.svg"
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate(); 
  async function createUser() {
    try {
      const response = await axios.post("http://localhost:8300/api/register/", {
        username: username,
        password: password,
        email:email
      });

      console.log("user yarandi", response.data);
      navigate("/login")
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="flex flex-col justify-center px-12 xl:px-40 lg:px-20 md:px-24 py-10 md:py-0 ">
      <div className="">
        <h3 className="text-2xl md:text-4xl  pb-4 font-bold">
        Create an account
        </h3>
        <p className="">Enter your details below</p>
      </div>
      <div className="py-8">
        <form className="flex gap-14 flex-col pb-6">
          <div className="border-bottom">
            <input
              type="text"
              placeholder="Name"
              className="outline-none"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}

            />
          </div>
          <div className="border-bottom">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="outline-none"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}

            />
          </div>
          <div className="border-bottom">
            <input
              type="password"
              placeholder="Password"
              className="outline-none"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

            />
          </div>
        </form>
        <div className="flex justify-center w-full pt-12 gap-4">
          <div className="w-full flex flex-col gap-4">
            <div onClick={createUser}>
            <Button bgPrimary={true} text={"Log In"}  wFull={"w-full"} />   
            </div>
            <button  className="flex py-[16px] px-[86px] gap-4 justify-center w-full items-center border rounded-md text-xs lg:text-lg md:text-md"> <FcGoogle />Sign up with Google</button>
          </div>


          
        </div>
        <p className="text-center py-4">
          Already have account? <NavLink to={"/login"}>Log in</NavLink>
          </p>
      </div>
    </div>
  );
};

export default SignUpForm;
