import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div className="flex flex-col w-[300px] lg:w-[350px] p-5 shadow-xl">
      <div className="h-[70%]">
        <img className="rounded w-full h-full" src={img} alt="Shoes" />
      </div>
      <div className="h-[30%] mt-5">
        <h2 className="text-xl font-bold">{title}!</h2>
        <div className="flex justify-between items-center mt-5">
        <p className="text-[18px] text-[#FF3811] ">Price: ${price}</p>
        <Link to={`/details/${_id}`}><FaArrowRightLong color="#FF3811" /></Link>
        </div>
      
      </div>
      
    </div>
  );
};

export default ServiceCard;
