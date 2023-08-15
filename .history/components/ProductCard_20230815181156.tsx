'use client';
import { ProductCardProps } from '@/types';
import React from 'react'

const ProductCard = ({id, title, description, price, thumbnail}) => {
  return (
    <div>
      <h2>{title}</h2> {/* Product title */}
      <img src={thumbnail} alt={title}/> {/* Product image */}
      <p>#{id}</p> {/* Product id */}
      <p>{description}</p> {/* Product description */}
      <h3>${price}</h3> {/* Product price */}
    </div>
  )
}

export default ProductCard;
