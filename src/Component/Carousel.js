import React, { useState } from "react";
import image9 from "../Assets/Images/Posters/9.png";
import image7 from "../Assets/Images/Posters/7.png";
import image6 from "../Assets/Images/Posters/6.png";
import image3 from "../Assets/Images/Posters/3.jpg";
import image4 from "../Assets/Images/Posters/4.jpg";
// Initial image array
const imageUrls = [image6, image7, image3, image4, image9];

const Carousel = () => {
  const [images, setImages] = useState(imageUrls);

  // Function to handle swipe left
  const swipeLeft = () => {
    // Move the first image to the end of the array
    const updatedImages = [...images.slice(1), images[0]];
    setImages(updatedImages);
  };

  // Function to handle swipe right
  const swipeRight = () => {
    // Move the last image to the beginning of the array
    const updatedImages = [images[images.length - 1], ...images.slice(0, -1)];
    setImages(updatedImages);
  };

  return (
    <div style={{ height: "30rem", marginBottom: "4rem" }}>
      <div className="text-center py-5">
        <span className="text-5xl text-black hover:text-white text-with-black-border">
          Posters
        </span>
      </div>
      <div className="flex justify-center relative">
        {images.map((image, index) => {
          // Adjust position and zIndex based on the index of the image
          let style = {};
          if (index === 0) {
            style = { width: "16rem", left: "20rem", zIndex: 1 };
          } else if (index === 1) {
            style = {
              width: "17rem",
              left: "30rem",
              zIndex: 2,
              transform: "translateY(-5px)",
            };
          } else if (index === 2) {
            style = {
              zIndex: 3,
              // height: "26rem",
              width: "19rem",
              transform: "translateY(-10px)",
            };
          } else if (index === 3) {
            style = {
              width: "17rem",
              right: "30rem",
              zIndex: 2,
              transform: "translateY(-5px)",
            };
          } else if (index === 4) {
            style = { width: "16rem", right: "20rem", zIndex: 1 };
          }

          return (
            <div
              key={index}
              className="rounded-2xl border-8 border-black group absolute transition-all duration-500"
              style={style}
            >
              <img
                className="group-hover:grayscale-0 grayscale transition duration-300"
                src={image}
                alt={`Slide ${index}`}
              />
            </div>
          );
        })}
      </div>

      {/* Add left and right buttons to handle swiping */}
      <div className="flex justify-between mt-4">
        <button
          onClick={swipeLeft}
          className="bg-gray-400 p-2 rounded hover:bg-black hover:text-white transition-all duration-300"
        >
          Swipe Left
        </button>
        <button
          onClick={swipeRight}
          className="bg-gray-400 p-2 rounded hover:bg-black hover:text-white transition-all duration-300"
        >
          Swipe Right
        </button>
      </div>
    </div>
  );
};

export default Carousel;
