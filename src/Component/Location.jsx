import React from 'react';

const Location = ({parent,child}) => {
  return (
    <div className='bg-[#FF3811] px-3 lg:px-5 py-1 lg:py-2'>
      <p className='text-sm lg:text-xl text-[#fff] font-semibold'>{parent}/{child}</p>
    </div>
  );
};

export default Location;