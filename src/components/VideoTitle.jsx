import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black pt-[6%]">
      <div className="m-12">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="w-1/3 m-6 ml-1 text-lg">{overview}</p>
      </div>
      <div className="ml-14">
        <button className="bg-white text-black font-bold p-4 px-12 rounded hover:bg-opacity-80">
          <div className="flex text-center">
          <AiFillCaretRight className="text-xl"/>
          <span>Play</span>
          </div>
        </button>
        <button className="bg-gray-600 text-white font-bold p-4 px-6 rounded ml-2 bg-opacity-50 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
