import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Location from "../Component/Location";
// import {detaisImg} from '../assets/images/checkout/checkout.png'

const Details = () => {
  const details = useLoaderData();
  const { _id, title, img, price, description } = details;
  return (
    <div className="my-8">
      <div className="relative ">
        <img src="https://i.ibb.co/71RKWWQ/checkout.png" alt="" />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-center text-[#fff] text-xl  lg:text-[45px] font-bold">
              Service Details
            </h1>
            <div className="absolute bottom-0">
              <Location parent="Home" child="Details"></Location>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 lg:mt-[129px] lg:space-x-5 px-5 lg:px-0">
        <div className="w-full lg:w-2/3 space-y-2 lg:space-y-5">
          <img src={img} className="rounded-lg w-full" alt="" />
          <h1 className="text-xl lg:tex-[35px] font-bold">{title}</h1>
          <p>{description}</p>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="bg-black text-white rounded-[10px] p-10">
            <h1 className="text-[25px] font-bold">Download</h1>
            <div className="flex items-center space-x-2.5 mt-[25px]">
              <img src="https://i.ibb.co/v3GgnLT/Frame-3.png" alt="" />
              <div className="flex-1">
                <p className="text-[18px] font-semibold">Our Brochure</p>
                <p className="text-base text-[#A2A2A2]">Download</p>
              </div>
              <div>
                <button className="p-4 rounded bg-[#FF3811] hover:scale-110">
                  <FaArrowRightLong color="#fff" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2.5 mt-[25px]">
              <img src="https://i.ibb.co/v3GgnLT/Frame-3.png" alt="" />
              <div className="flex-1">
                <p className="text-[18px] font-semibold">Company Details</p>
                <p className="text-base text-[#A2A2A2]">Download</p>
              </div>
              <div>
                <button className="p-4 rounded bg-[#FF3811] hover:scale-110">
                  <FaArrowRightLong color="#fff" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-black text-white rounded-[10px] p-10 pb-[60px] mt-[30px]">
            <div className="flex flex-col justify-center items-center">
              <img
                className=""
                src="https://i.ibb.co/Lnm3vHL/Group-1-1.png"
                alt=""
              />
              <h1 className="text-[26px] font-bold">Car Doctor</h1>
            </div>
            <h1 className="text-xl font-bold text-center mt-5">
              Need Help? We Are Here <br /> To Help You
            </h1>
            <div className="h-[126px] rounded-md bg-white relative mt-6">
              <h1 className="text-xl font-bold text-black text-center pt-5">
                <span className="text-[#FF3811]">Car Doctor </span>Special
              </h1>
              <p className="text-base text-black text-center">
                Save up to <span className="text-[#FF3811]">60% off</span>
              </p>
              <div className="flex justify-center absolute left-[50px] lg:left-[82px] top-[98px]">
                <button className="px-8 py-4 bg-[#FF3811] rounded-md hover:scale-110">
                  Get A Qute
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-[35px] font-bold mt-[30px]">
            Price: <span>${price}</span>
          </h1>
          <Link to={`/checkout/${_id}`}><button className="py-4 w-full bg-[#FF3811] text-white rounded-lg font-semibold text-[18px] mt-[30px] hover:scale-110">
            Proceed Checkout
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
