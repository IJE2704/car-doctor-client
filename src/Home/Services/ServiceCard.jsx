import React from "react";
import { MoveRight } from "lucide";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="flex flex-col w-[300px] lg:w-[350px] p-5 shadow-xl">
      <div className="h-[70%]">
        <img className="rounded w-full h-full" src={img} alt="Shoes" />
      </div>
      <div className="h-[30%] mt-5">
        <h2 className="text-xl font-bold">{title}!</h2>
        <p className="text-[18px] text-[#FF3811] mt-5">Price: ${price}</p>
        {/* <MoveRight  /> */}
        {/* <MoveRight></MoveRight> */}
      </div>
      
    </div>
  );
};

export default ServiceCard;
