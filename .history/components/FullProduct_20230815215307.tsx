import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Logic to fetch and display product details based on the ID
  // You can use the ID to fetch the specific product details from an API or a data source

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Product ID: {id}</h2>
      {/* Display other product details */}
    </div>
  );
};

export default ProductDetails;
