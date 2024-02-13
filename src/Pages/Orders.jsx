import React, { useContext, useEffect, useState } from 'react';
import Location from '../Component/Location';
import { AuthContext } from '../Provider/AuthProvideer';
import OrderCart from './OrderCart';

const Orders = () => {
  const {user} = useContext(AuthContext);
  const [orders, setOrders] = useState([])
  // console.log(user.email);
  useEffect(()=>{
    fetch(`http://localhost:5000/checkOut?customar_email=${user.email}`)
    .then(res => res.json())
    .then(data => setOrders(data))
    .catch(error => console.log(error))
  },[user?.email])
  console.log(orders)
  return (
    <div>
      <div className="relative ">
        <img src="https://i.ibb.co/71RKWWQ/checkout.png" alt="" />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-center text-[#fff] text-xl  lg:text-[45px] font-bold">
              Orders
            </h1>
            <div className="absolute bottom-0">
              <Location parent="Home" child="Orders"></Location>
            </div>
          </div>
        </div>
      </div>

      <div className='my-4 space-y-4 w-full'>
        {
          orders.map((order) => <OrderCart
          key={order._id}
          order={order}
          >

          </OrderCart>)
        }
      </div>
    </div>
  );
};

export default Orders;