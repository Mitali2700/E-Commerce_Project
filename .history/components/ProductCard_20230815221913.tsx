 'use client'


import{ useState } from 'react';

interface IProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage:number;
  rating:number;
  stock:number;
  brand:string;
  category:string;
}

const ProductCard: React.FC<IProductCardProps> = ({
  id,
  title,
  description,
  price,
  thumbnail,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
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
      <p>Ratings : {rating}</p>
      {showDetails ? (
        <div>
          <p className="text-gray-500">{description}</p>
          <p>Discount:{discountPercentage} </p>
         
        <p>Stock: {stock}</p>
        <p>Path: {brand}</p>
  <p>Category: {category}</p>
          <button className="bg-blue-500" onClick={toggleDetails}>Hide Details</button>
        </div>
      ) : (
        <button className="bg-blue-500" onClick={toggleDetails}>View Details</button>
      )}
    </div>
  );
};

export default ProductCard;

