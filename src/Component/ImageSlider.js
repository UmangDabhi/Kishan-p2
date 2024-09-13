import React from "react";

const ImageSlider = ({ images, direction = "left" }) => {
  const sliderContainerStyle = {
    height: 400,
    margin: "auto",
    position: "relative",
    width: "90%",
    display: "grid",
    placeItems: "center",
    overflow: "hidden",
  };

  const slideTrackStyle = {
    display: "flex",
    width: `calc(250px * ${images.length * 2})`, // dynamic width based on images length
  };

  const slideStyle = {
    height: 300,
    width: 250,
    display: "flex",
    alignItems: "center",
    padding: 15,
    perspective: 100,
  };

  const slideImgStyle = {
    width: "100%",
    transition: "transform 1s",
  };

  const getAnimationName = (direction) => {
    return direction === "left" ? "scrollLeft" : "scrollRight";
  };

  const keyframesStyle = `
    @keyframes scrollLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-250px * ${images.length})); }
    }

    @keyframes scrollRight {
      0% { transform: translateX(calc(-250px * ${images.length - 3})); }
      100% { transform: translateX(0); }
    }
  `;

  const getAnimationStyle = (direction) => {
    return {
      animation: `${getAnimationName(direction)} 40s linear infinite`,
    };
  };

  return (
    <>
      <style>{keyframesStyle}</style>
      <div className="slider-container" style={sliderContainerStyle}>
        <div
          className="slide-track"
          style={{ ...slideTrackStyle, ...getAnimationStyle(direction) }}
        >
          {images.map((element, index) => (
            <div className="slide" style={slideStyle} key={index}>
              <img
                src={element}
                style={slideImgStyle}
                onMouseOver={(e) =>
                  (e.target.style.transform = "translateZ(20px)")
                }
                onMouseOut={(e) => (e.target.style.transform = "none")}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
