import React from "react";

export const Button = ({ text }) => {
  return <button className="mt-4 titan-one-regular bg-gray-400 rounded-3xl text-3xl p-3 hover:text-white hover:bg-black transition duration-300 ease-in-out" style={{boxShadow:"gray 4px 4px 4px "}}>{text}</button>;
};
