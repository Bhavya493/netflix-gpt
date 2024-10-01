import React, { useState } from "react";
import "./MovieSlider.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const MovieSlider = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <button className="text-white font-bold">
          <AiOutlineArrowLeft className="text-4xl" />
        </button>
      </div>
      {children.map((item, index) => (
        <div>{item}</div>
      ))}
      <div>
        <button className="text-white font-bold">
          <AiOutlineArrowRight className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default MovieSlider;
