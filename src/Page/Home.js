import React from "react";
import Hero from "../Component/Hero";
import Card from "../Component/Card";
import FashionMania from "../Assets/Images/Girl.png";
import PlantifyImage from "../Assets/Images/plantify.png";
import CoffeeImage from "../Assets/Images/Coffee.png";
import KashmirImage from "../Assets/Images/kashmir.png";

import { Button } from "../Component/Button";
import Carousel from "../Component/Carousel";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
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
              className="mt-4 titan-one-regular bg-white text-yellow-400 rounded-3xl text-3xl p-3  transition duration-300 ease-in-out"
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
              className="mt-4 titan-one-regular bg-white text-green-400 rounded-3xl text-3xl p-3  transition duration-300 ease-in-out"
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
              className="mt-4 titan-one-regular bg-white text-amber-900 rounded-3xl text-3xl p-3  transition duration-300 ease-in-out"
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
              className="mt-4 titan-one-regular bg-white text-blue-400 rounded-3xl text-3xl p-3  transition duration-300 ease-in-out"
              style={{ boxShadow: "gray 4px 4px 4px " }}
            >
              Visit us
            </button>
          </div>
        </>
      ),
    },
  ];
  const details = [
    {
      key: "01",
      title: "Discovery call",
      data: "Quick 30-min call to discuss all your needs, the project scope,and what I can do to help you.",
    },
    {
      key: "02",
      title: "Design & Exploration",
      data: "I'll start experimenting with various designs and layouts until I come up with the best three.",
    },
    {
      key: "03",
      title: " Revisions",
      data: "You'll be able to judge my work and suggest improvements. I'll refine the design until you're 100% satisfied.",
    },
    {
      key: "04",
      title: "Handoff & Support",
      data: "Lastly, I'll handoff the design file to you and your time. I'll also be available for 30 days to respond to any question you might have..",
    },
  ];

  return (
    <>
      <Hero />
      <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
        <div class="text-center py-5">
          <span className=" text-5xl md:text-8xl text-black transition-all duration-300 ease-in-out  hover:text-white text-with-black-border titan-one-regular">
            Selected Work
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

        {/* View All Button */}
        <div onClick={() => navigate("/project")}>
          <Button text="View All" />
        </div>
      </div>

      <div class="bg-black text-white">
        <div class="container mx-auto p-4">
          <h1 class="text-6xl font-bold  mb-8 titan-one-regular md:text-3xl">
            My Process <span class="text-gray-400">⚙️</span>
          </h1>
          <div class="grid grid-cols-1 gap-4 md:gap-2 gap-y-20 md:gap-y-40 md:grid-cols-2">
            {details.map((element) => (
              <div className="flex justify-center items-center">
                <div
                  style={{
                    backgroundColor: "#1c1c1c",
                    borderRadius: "5rem",
                    height: "30rem",
                    width: "30rem",
                    ...(window.innerWidth < 768 && {
                      height: "25rem",
                      // Add other styles for md screen size here
                    }),
                  }}
                  class="p-5 md:p-9 h-52 md:h-96 flex flex-col justify-between"
                >
                  <div>
                    <h2 class="titan-one-regular text-4xl font-bold mb-4 text-with-white-border md:text-7xl">
                      {element.key}
                    </h2>
                    <h3 class="titan-one-regular text-3xl font-semibold mb-2 text-with-white-border md:text-5xl">
                      {element.title}
                    </h3>
                  </div>
                  <p className="text-xl inter-light-100 md:text-2xl">
                    {element.data}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Carousel />
      {/* View All Button */}
      <div className="flex justify-center mb-5" onClick={() => navigate("/posters")}>
        <Button text="View All" />
      </div>
      <div className=" bg-black text-white p-2 ">
        <div className=" m-4 p-2 text-center border-2 h-96 flex justify-center flex-col border-white rounded-xl">
          <div>
            <p className="text-7xl brygada-1918-400">Interested In </p>
            <p className="text-7xl brygada-1918-400">Working Together ?</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText("your-email@example.com"); // replace with the email you want to copy
                alert("Email copied to clipboard!");
              }}
              className="inter-light-100 text-black mt-8 text-3xl bg-white py-2 px-3"
            >
              Copy Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
