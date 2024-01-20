import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-5">
        <h2 className="text-xl font-bold text-[#FF3811]">About Us</h2>
        <h1 className="text-2xl lg:text-5xl font-bold ">Our Services Area</h1>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br className="hidden lg:block" /> words which don't look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 mt-[50px]">
        {
          services.map(service => <ServiceCard
          key={service._id}
          service = {service}
          ></ServiceCard>)
        }
      </div>
      <div className="mt-[50px] mb-5 flex justify-center items-center">
        <button className="btn-hover">More Services</button>
      </div>
    </div>
  );
};

export default Services;
