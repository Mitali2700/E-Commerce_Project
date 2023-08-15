'use client'

import React from 'react'

interface IProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage:number;
}

const ProductCard: React.FC<IProductCardProps> = ({id, title, description, price, thumbnail}) => {
  return (
    <div>
      <h2>{title}</h2> 
      <img src={thumbnail} alt={title}/> 
      /p>#{id}</p> 
      <p>{description}</p> 
      <h3>${price}</h3> 
    </div>
  )
};

export default ProductCard;
