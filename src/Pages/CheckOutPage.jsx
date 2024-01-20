import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOutPage = () => {
  const service = useLoaderData();
  const {_id,title,img} = service;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default CheckOutPage;