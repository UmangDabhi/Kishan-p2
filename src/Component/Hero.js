import React, { useState } from "react";
import backgroundImage from "../Assets/Images/Kishan.jpg"; // Importing the image from the assets folder

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onMouseEnter={() => setHovered(true)} // Detect hover start
        onMouseLeave={() => setHovered(false)} // Detect hover end
      >
        {/* Text overlay with fade-in/fade-out effect */}
        <div className="relative z-10 flex items-center justify-center h-full w-full bg-black bg-opacity-50">
          <h1
            className={`text-white text-5xl md:text-8xl text-center font-bold transition-opacity duration-500 ease-in-out titan-one-regular ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
          >
            Kishan Atiyabhai Godhaniya
          </h1>
          <div
            className={`absolute text-white text-2xl md:text-6xl font-bold transition-opacity duration-500 ease-in-out  ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-center mb-1 titan-one-regular">About me</h1>
            <p className="text-center inter-light ">Hi I am Kishan Godhaniya. A Dedicated UI UX Designer and an IT Student. Dedicated to creating visually appealing and functinoal designs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
