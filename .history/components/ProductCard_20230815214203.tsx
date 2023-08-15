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
      
      <img src={thumbnail} alt={title}/> 
      <h2>{title}</h2> 
      {/* <p>#{id}</p>  */}
      {/* <p>{description}</p>  */}
      <h3>${price}</h3> 
            
      <button st>View</button>
    </div>
  )
};

export default ProductCard;


{/* <div>
      
      <img src={thumbnail} alt={title}/> 
      <h2>{title}</h2> 
     <p>#{id}</p>  
    <p>{description}</p> 
      <h3>${price}</h3> 
      <button>View</button>
    </div> */}