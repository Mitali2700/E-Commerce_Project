// import Image from "next/image";
// import {CustomFilters, Hero, ProductCard, SearchBar } from '@/components'
// import {fetchProduct} from '@/utils'

// export default async function Home() {
//   const allProduct = await fetchProduct();
//   console.log(allProduct)

//   const isDataEmpty = !Array.isArray(allProduct) || allProduct.length < 1 || !allProduct;

//   return (
//     <main className="overflow-hidden">
//       <Hero/>
//       <div className="mt-12 padding-x padding-y max-width" id="discover">
//         <div className="home__text-container">
//           <h1 className="text-4xl font-extrabold">
//             Products...
//           </h1>
//           <p>Life is hard enough already. Let us make it a little easier with our amazing products.</p>
//         </div>
//         <div className="home__filters">
//             <SearchBar/>
//             <div className="home__filter-container">
//               <CustomFilters title='fragrances'/>
//               <CustomFilters title="groceries" />
//               <CustomFilters title="fskincare" />
//               <CustomFilters title="laptops" />
//               <CustomFilters title="smartphones" />
//             </div>
//         </div>
//         { !isDataEmpty ? (
//           <section>
//             <div className="home__cars-wrapper">
//               {/* {allProduct?.map((title) => (
//                 <ProductCard title={title}/>
//               ))} */}
//               {allProduct.map((product) => {
//                 return (
//                   <ProductCard key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} thumbnail={product.thumbnail} />
//                 );
//               })}

//             </div>
//             We Have Different Category of Products...
//           </section>
//         ) :(
//           <div className="home__error-container">
//             <h2 className="text-black text-xl font-bold">Oops, no result.</h2>
//              <p>{allProduct?.message}</p>
//           </div>
         
//         )
//         }
//       </div>
//     </main>
//   );
// }





import Image from "next/image";
import { CustomFilters, Hero, ProductCard, SearchBar } from '@/components'
import { fetchProduct } from '@/utils'
import { useState } from "react";
import { ProductCardProps } from "@/types";

export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const allProduct = await fetchProduct();
      setProducts(allProduct);
    }
    fetchData();
  }, []);

  const isDataEmpty = !Array.isArray(products) || products.length < 1 || !products;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Products...
          </h1>
          <p>Life is hard enough already. Let us make it a little easier with our amazing products.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilters title='fragrances' />
            <CustomFilters title="groceries" />
            <CustomFilters title="fskincare" />
            <CustomFilters title="laptops" />
            <CustomFilters title="smartphones" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  discountPercentage={product.discountPercentage}
                  rating={product.rating}
                  stock={product.stock}
                  brand={product.brand}
                  category={product.category}
                  thumbnail={product.thumbnail}
                  images={product.images}
                />
              ))}
            </div>
            We Have Different Category of Products...
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no result.</h2>
            <p>{products?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}