import React, { useContext, useEffect, useState } from 'react';
import Location from '../Component/Location';
import { AuthContext } from '../Provider/AuthProvideer';
import OrderCart from './OrderCart';
import Swal from 'sweetalert2';

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

  // this function we create for delete the orders data
  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure, you want to delete this order?');
    if(proceed){
      fetch(`http://localhost:5000/checkOut/${id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        if(data.deletedCount === 1)
        {
          // here filters the order without deleted order
          const remaining = orders.filter(order => order._id !== id);
          setOrders(remaining);
          Swal.fire({
            title: "Deleted!",
            text: "Succesfully deleted the order",
            icon: "error"
          });
        }
      })
    }
  }
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

      <div>
        {
          orders.length !== 0 ? (
            <div className='my-10 space-y-4 w-full'>
        {
          orders.map((order) => <OrderCart
          key={order._id}
          order={order}
          handleDelete = {handleDelete}
          >

          </OrderCart>)
        }
      </div>
          ) : (
            <div className='h-[20vh] flex justify-center items-center'>
              <p className='text-xl lg:text-3xl text-black text-bold'>You dont have any orders</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Orders;