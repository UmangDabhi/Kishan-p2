import React from "react";


const ImageSlider = ({ images, direction = "left" }) => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className={
            direction == "left" ? "slider-inner-left" : "slider-inner-right"
          }
        >
          {images.map((url, index) => (
            <div key={index} className="slider-item">
              <div className="border-8 rounded-3xl border-black mx-5">
                <img src={url} alt={`Slide ${index}`} className="image-size" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
