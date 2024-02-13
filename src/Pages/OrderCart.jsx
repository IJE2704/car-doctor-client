import React from 'react';

const OrderCart = ({order}) => {
  const {service_title, service_img, service_price, ServiceDate} = order;
  return (
    <div className='grid grid-cols-12 items-center w-full'>
      <div className='cols-span-1 flex justify-center'>
        <button><div className='w-[24px] h-[24px] bg-black flex justify-center items-center rounded-full'><p className='text-white'>X</p></div></button>
      </div>
      <div className='cols-span-1'>
        <img className='rounded' src={service_img} alt="" />
      </div>
      <div className='cols-span-3 flex justify-center items-center'>
      <p>{service_title}</p>
      </div>
      <div className='cols-span-3 flex justify-center items-center'>
      <p>${service_price}</p>
      </div><div className='cols-span-3 flex justify-center items-center'>
      <p>{ServiceDate}</p>
      </div>
      <div className='cols-span-1'>
        <button className='px-5 py-2 bg-[#FF3811] text-white rounded'>Pending</button>
      </div>
    </div>
  );
};

export default OrderCart;