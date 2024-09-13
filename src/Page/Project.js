import React from "react";
import Hero from "../Component/Hero";
import Card from "../Component/Card";
import FashionMania from "../Assets/Images/Girl.png";
import PlantifyImage from "../Assets/Images/plantify.png";
import CoffeeImage from "../Assets/Images/Coffee.png";
import KashmirImage from "../Assets/Images/kashmir.png";
import tourismImage from "../Assets/Images/Tourism.png";
import nickyImage from "../Assets/Images/nickey.png";
import spotifyImage from "../Assets/Images/spotify.png";

export const Project = () => {
  const cardDetails = [
    {
      image: FashionMania,
      text: "Fashion Mania",
      hoverText: (
        <>
          <p className="text-3xl text-center px-4">
            Created a E-commerce Landing page of traditional Indian women
            attires which consist of various products and design have attractive
            prototyping and user friendly design
          </p>
          <div className="flex justify-center absolute top-72 mx-auto left-40">
            <button
              className="mt-4 titan-one-regular bg-white text-yellow-400 rounded-3xl text-3xl p-3  transition duration-700 ease-in-out"
              style={{ boxShadow: "gray 4px 4px 4px " }}
            >
              Visit us
            </button>
          </div>
        </>
      ),
    },
    {
      image: PlantifyImage,
      text: "Plantify",
      hoverText: (
        <>
          <p className="text-3xl text-center px-4">
            Created a Plant Nursery’s web landing ,a plant nursery dedicated to
            bringing nature closer to your home. My design aims to provide a
            refreshing and engaging user experience that highlights the beauty
            and variety of plants available.
          </p>
          <div className="flex justify-center absolute top-72 mx-auto left-40">
            <button
              className="mt-4 titan-one-regular bg-white text-green-400 rounded-3xl text-3xl p-3  transition duration-700 ease-in-out"
              style={{ boxShadow: "gray 4px 4px 4px " }}
            >
              Visit us
            </button>
          </div>
        </>
      ),
    },
    {
      image: CoffeeImage,
      text: "The Coffee Station",
      hoverText: (
        <>
          <p className="text-3xl text-center px-4">
            I have developed the user interface for a mobile application called
            "The Coffee Station." The app features various transitions and
            buttons to enhance user interaction.
          </p>
          <div className="flex justify-center absolute top-72 mx-auto left-40">
            <button
              className="mt-4 titan-one-regular bg-white text-amber-900 rounded-3xl text-3xl p-3  transition duration-700 ease-in-out"
              style={{ boxShadow: "gray 4px 4px 4px " }}
            >
              Visit us
            </button>
          </div>
        </>
      ),
    },
    {
      image: KashmirImage,
      text: "The Kashmir",
      hoverText: (
        <>
          <p className="text-3xl text-center px-4">
            Created a tourist web UI with cloud effect. Immerse yourself in the
            breathtaking landscapes of Kashmir with our intuitive UI design.
            Navigate seamlessly through Dal Lake, pahalgam, and Gulmarg
          </p>
          <div className="flex justify-center absolute top-72 mx-auto left-40">
            <button
              className="mt-4 titan-one-regular bg-white text-blue-400 rounded-3xl text-3xl p-3  transition duration-700 ease-in-out"
              style={{ boxShadow: "gray 4px 4px 4px " }}
            >
              Visit us
            </button>
          </div>
        </>
      ),
    },
    {
      image: tourismImage,
      text: "Gujarat Tourism",
      hoverText: (
        <>
          <p className="text-3xl text-center px-4">
            Designed and developed a dynamic tourist web UI featuring an
            animated carousel effect. This web interface is designed to provide
            an engaging and immersive experience for users exploring travel
            destinations.
          </p>
          <div className="flex justify-center absolute top-72 mx-auto left-40">
            <button
              className="mt-4 titan-one-regular bg-white text-amber-600 rounded-3xl text-3xl p-3  transition duration-700 ease-in-out"
              style={{ boxShadow: "gray 4px 4px 4px " }}
            >
              Visit us
            </button>
          </div>
        </>
      ),
    },
    {
      image: nickyImage,
      text: "Nicky Redesign",
      hoverText: (
        <>
          <p className="text-3xl text-center px-4">
            This responsive UI design blends style and usability, offering both
            dark and light modes for a customizable user experience. Clean
            typography, intuitive navigation, and dynamic visuals enhance
            product presentation while ensuring seamless interaction.{" "}
          </p>
          <div className="flex justify-center absolute top-72 mx-auto left-40">
            <button
              className="mt-4 titan-one-regular bg-white text-amber-600 rounded-3xl text-3xl p-3  transition duration-700 ease-in-out"
              style={{ boxShadow: "gray 4px 4px 4px " }}
            >
              Visit us
            </button>
          </div>
        </>
      ),
    },
    {
      image: spotifyImage,
      text: "Spotify Redesign",
      hoverText: (
        <>
          <p className="text-3xl text-center px-4">
            cloned the Spotify app interface, capturing the entire user journey
            from the startup screen to the music player. Focused on maintaining
            a user-friendly design, seamless navigation, and engaging visual
            aesthetics. This project emphasizes attention to detail
          </p>
          <div className="flex justify-center absolute top-72 mx-auto left-40">
            <button
              className="mt-4 titan-one-regular bg-white text-green-600 rounded-3xl text-3xl p-3  transition duration-700 ease-in-out"
              style={{ boxShadow: "gray 4px 4px 4px " }}
            >
              Visit us
            </button>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
        <div class="text-center py-5">
          <span className="text-5xl text-black hover:text-white text-with-black-border titan-one-regular">
            Projects
          </span>
        </div>
        {/* Grid container for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cardDetails.map((element) => (
            <Card
              image={element.image}
              defaultText={element.text}
              hoverText={element.hoverText}
            />
          ))}
        </div>
      </div>
    </>
  );
};
