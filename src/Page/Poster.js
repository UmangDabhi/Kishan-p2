import React from "react";
import ImageSlider from "../Component/ImageSlider";
import image1 from "../Assets/Images/Posters/1.png";
import image2 from "../Assets/Images/Posters/2.png";
import image3 from "../Assets/Images/Posters/3.jpg";
import image4 from "../Assets/Images/Posters/4.jpg";
import image5 from "../Assets/Images/Posters/5.png";
import image6 from "../Assets/Images/Posters/6.png";
import image7 from "../Assets/Images/Posters/7.png";
import image8 from "../Assets/Images/Posters/8.png";
import image9 from "../Assets/Images/Posters/9.png";
import image10 from "../Assets/Images/Posters/10.png";
import image11 from "../Assets/Images/Posters/11.jpg";

export const Posters = () => {
  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
        <div class="text-center py-5">
          <span className="text-5xl  titan-one-regular text-black hover:text-white text-with-black-border titan-one-regular">
            Posters & Book Covers
          </span>
        </div>
        {/* Grid container for cards */}

        <ImageSlider images={imageUrls} />
      </div>
    </>
  );
};
