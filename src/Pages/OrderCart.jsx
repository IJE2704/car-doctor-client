import React from 'react';

const OrderCart = ({order,handleDelete}) => {
  const {_id,service_title, service_img, service_price, ServiceDate} = order;
  return (
    <div className='grid grid-cols-6 items-center w-full gap-5'>
      <div className='cols-span-1 flex justify-center'>
        <button onClick={()=>handleDelete(_id)}><div className='w-[24px] h-[24px] bg-black hover:bg-[#FF3811] flex justify-center items-center rounded-full'><p className='text-white'>X</p></div></button>
      </div>
      <div className='cols-span-1 hidden md:block'>
        <img className='rounded ' src={service_img} alt="" />
      </div>
      <div className='cols-span-1 flex justify-center items-center'>
      <p>{service_title}</p>
      </div>
      <div className='cols-span-1 flex justify-center items-center'>
      <p>${service_price}</p>
      </div><div className='cols-span-1 flex justify-center items-center'>
      <p>{ServiceDate}</p>
      </div>
      <div className='cols-span-1'>
        <button className='px-5 py-2 bg-[#FF3811] text-white rounded hover:scale-110'>Pending</button>
      </div>
    </div>
  );
};

export default OrderCart;