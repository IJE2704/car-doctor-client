import React from "react";
import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero h-[70vh]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 h-full flex justify-center items-start">
          <div className="w-full h-full relative">
          <img src={person} className="w-[80%] rounded-lg shadow-2xl" />
          <img src={parts} className="absolute w-1/2 rounded-lg shadow-2xl right-0 lg:right-5 top-1/2 border-8 border-white" />
          </div>
        </div>
        <div className="lg:w-1/2 pr-10 space-y-2 lg:space-y-5">
          <h2 className="text-xl font-bold text-[#FF3811]">About Us</h2>
          <h1 className="text-2xl lg:text-5xl font-bold pr-0 lg:pr-10">We are qualified & of experience in this field</h1>
          <p className="">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="button">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
 