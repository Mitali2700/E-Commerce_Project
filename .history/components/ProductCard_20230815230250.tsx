 'use client'
 import { useState } from 'react';
 import { FaShoppingCart } from 'react-icons/fa';
 import Popup from 'reactjs-popup';
 import 'reactjs-popup/dist/index.css';
 
 interface IProductCardProps {
   id: number;
   title: string;
   description: string;
   price: number;
   thumbnail: string;
   discountPercentage: number;
   rating: number;
   stock: number;
   brand: string;
   category: string;
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
   const [showPopup, setShowPopup] = useState(false);
 
   const toggleDetails = () => {
     setShowDetails(!showDetails);
   };
 
   const handleAddToCart = () => {
     setShowPopup(true);
   };
 
   return (
     <div>
       <img className="h-36 w-36" src={thumbnail} alt={title} />
       <h2>{title}</h2>
       <h3>${price}</h3>
       <p>Ratings : {rating}⭐</p>
       {showDetails ? (
         <div>
           <p className="text-gray-500">{description}</p>
           <p className="text-gray-500">Discount:{discountPercentage} </p>
           <p className="text-gray-500">Stock: {stock}</p>
           <p className="text-gray-500">Path: {brand}</p>
           <p className="text-gray-500">Category: {category}</p>
           <button className="bg-blue-500 p-2 text-white mt-2" onClick={toggleDetails}>
             Hide Details
           </button>
         </div>
       ) : (
         <div>
           <button className="bg-blue-500 p-2 text-white mt-2 mb-4" onClick={toggleDetails}>
             View Details
           </button>
           <button className="bg-red-500 ml-6 p-2 text-white" onClick={handleAddToCart}>
             <FaShoppingCart className="inline-block" />
           </button>
         </div>
       )}
       <Popup open={showPopup} onClose={() => setShowPopup(false)}>
         <div>Product added to cart!</div>
       </Popup>
     </div>
   );
 };
 
 export default ProductCard;
 