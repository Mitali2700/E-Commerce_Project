import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

function ProductList() {
  const fetchProducts = async() => {
    const { data } = await axios.get('https://api.yourwebsite.com/products');
    return data;
  }

  const { isLoading, error, data } = useQuery('products', fetchProducts);

  if (isLoading) return 'Loading...'

  if (error) return `An error has occurred: ${error.message}`

  return (
    <div className="flex flex-wrap justify-around">
    {data.map(product => (
        <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img className="w-full" src={product.image} alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base">
              {product.description}
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Price: {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList;
