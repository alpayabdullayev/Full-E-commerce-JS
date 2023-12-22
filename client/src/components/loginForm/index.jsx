import React, { useContext, useState } from "react";
import Button from "../button";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { UserContext } from "../../context/userContext";

const LoginInForm = () => {
  const {setUser} = useContext(UserContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8300/api/login/", {
        username: username,
        password: password,
      });

      console.log("daxil oldu", response.data.token);
      localStorage.setItem("t",response.data.token)
      setUser({username,password})
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) =>{
    const authToken = localStorage.getItem('t') ? JSON.parse(localStorage.getItem('t')) : null;
    try {
      const response = await axios.delete(`http://localhost:8300/api/register/${id}`, {
        headers: `Bearer ${authToken}`
      },); console.log('User deleted successfully', response.data);

    } catch (error) {
      
    }
  }

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
            <input
              type="text"
              placeholder="Email"
              className="outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="border-bottom">
            <input
              type="password"
              placeholder="Password"
              className="outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="flex justify-between pt-12 gap-4">
          <div onClick={handleLogin}>
            <Button bgPrimary={true} text={"Log In"} />
          </div>

          <button className="text-secondary">Forget Password?</button>
        </div>
      </div>
    </div>
  );
};

export default LoginInForm;
