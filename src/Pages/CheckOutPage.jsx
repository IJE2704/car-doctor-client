import React from "react";
import { useLoaderData } from "react-router-dom";
import Location from "../Component/Location";

const CheckOutPage = () => {
  const service = useLoaderData();
  const { _id, title, img } = service;
  return (
    <div>
      <div className="relative ">
        <img src="https://i.ibb.co/71RKWWQ/checkout.png" alt="" />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-center text-[#fff] text-xl  lg:text-[45px] font-bold">
              Checkout
            </h1>
            <div className="absolute bottom-0">
              <Location parent="Home" child="Checkout"></Location>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-[#F3F3F3] rounded-md mt-[30px] lg:mt-[130px] mb-[30px] lg:mb-[130px]" >
        <form className="w-full p-2 lg:p-[97px] sm:py-5 space-y-2 lg:space-y-5">
          <div className=" w-full flex flex-row space-x-2 lg:space-x-5">
            <div className="w-full">
              {" "}
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
                name="firstName"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
                name="lastName"
                required
              />
            </div>
          </div>
          <div className="form-control flex flex-row space-x-2 lg:space-x-5">
            <div className="w-full">
              <input
                type="text"
                placeholder="Your Phone"
                className="input input-bordered w-full"
                name="phoneNumber"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                name="email"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              className=" border-2 rounded-md p-4"
              name="message"
              placeholder="Message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="w-full py-4 bg-[#FF3811] text-white rounded-lg hover:scale-110">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOutPage;
