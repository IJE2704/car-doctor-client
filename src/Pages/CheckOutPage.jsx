import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Location from "../Component/Location";
import { AuthContext } from "../Provider/AuthProvideer";
import Swal from "sweetalert2";

const CheckOutPage = () => {
  const service = useLoaderData();
  const { _id, title, img } = service;
  const {user,servicePrice} = useContext(AuthContext);
  console.log(user);

  //this function for checkout
  const handleCheckOut = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phoneNumber.value;
    const email = form.email.value;
    const message = form.message.value;
    // console.log(firstName,lastName,phone,email,message);
    const order ={
      customar_name:name,
      ServiceDate:date,
      customer_Number:phone,
      customar_email:email,
      customaer_message:message,
      service_id:_id,
      service_title:title,
      service_img:img,
      service_price:servicePrice
    }
    console.log(order);

    //data send to backend
    fetch('http://localhost:5000/checkOut',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Successfully CheckOut",
        });
      }
    })
    form.reset();
    
  }
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
        <form onSubmit={handleCheckOut} className="w-full p-2 lg:p-[97px] sm:py-5 space-y-2 lg:space-y-5">
          <div className=" w-full flex flex-row space-x-2 lg:space-x-5">
            <div className="w-full">
              {" "}
              <input
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                name="name"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="date"
                className="input input-bordered w-full"
                name="date"
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
                defaultValue={user?.email}
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
            <button type="submit" className="w-full py-4 bg-[#FF3811] text-white rounded-lg hover:scale-110">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOutPage;
