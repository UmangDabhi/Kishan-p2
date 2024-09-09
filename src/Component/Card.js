import React, { useState } from "react";

const Card = ({ image, defaultText, hoverText }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      style={{ height: "650px", width: "500px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card Image with Grayscale that turns to full color on hover */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out ${
          hovered ? "grayscale-0" : "grayscale"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Text Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full w-full bg-black bg-opacity-50">
        {/* Default Text */}
        <h1
          className={` text-white font-bold transition-all duration-1000 ease-in-out transform kaushan-script-regular ${
            hovered
              ? " text-2xl -translate-y-44" // Move up on hover
              : "text-6xl" // Start in center
          }`}
        >
          {defaultText}
        </h1>
        {/* Hover Text */}
        <div
          className={`absolute text-white text-xl font-bold transition-opacity duration-500 ease-in-out kaushan-script-regular ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {hoverText}
        </div>
      </div>
    </div>
  );
};

export default Card;
