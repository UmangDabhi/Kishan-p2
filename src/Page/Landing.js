import React, { useState, useEffect } from "react";
import logo from "../Assets/Images/Logo/Logo.jpg";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className={animate ? "animate" : ""}>
        <img src={logo} alt="logo" className="logo" style={{height:"35rem"}} />
        <div className="flex justify-center items-center">
          <div className="text-and-button flex flex-col gap-2 justify-center items-center">
            <h1 className="brygada-1918-400 text-3xl" style={{letterSpacing:"10px"}}>Kishan Atiyabhai Godhaniya</h1>
            <button
              className=" text-white bg-black w-32 rounded-xl transition-all duration-700 ease-in-out border hover:border-black hover:text-black hover:bg-white "
              onClick={() => {
                navigate("home");
              }}
            >
              Visit Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
