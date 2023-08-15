// 'use client'

// import React from 'react'
// import { Link } from 'react-router-dom';

// interface IProductCardProps {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
//   discountPercentage:number;
// }

// const ProductCard: React.FC<IProductCardProps> = ({id, title, description, price, thumbnail}) => {
//   return (
//     <div>
      
//       <img src={thumbnail} alt={title}/> 
//       <h2>{title}</h2> 
//       <h3>${price}</h3> 
            
     
//     </div>
//   )
// };

// export default ProductCard;

import React, { useState } from 'react';

interface IProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
}

const ProductCard: React.FC<IProductCardProps> = ({
  id,
  title,
  description,
  price,
  thumbnail,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <h3>${price}</h3>
      {showDetails ? (
        <div>
          <p>{description}</p>
          <p>Discount: {d}</p>
          <button onClick={toggleDetails}>Hide Details</button>
        </div>
      ) : (
        <button onClick={toggleDetails}>View Details</button>
      )}
    </div>
  );
};

export default ProductCard;

