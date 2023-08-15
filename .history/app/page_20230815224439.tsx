"use client"
// import Image from "next/image";
import {CustomFilters, Hero, ProductCard, SearchBar } from '@/components'
import {fetchProduct} from '@/utils'

export default async function Home() {
  var allProduct = await fetchProduct();
  allProduct = allProduct.products


  const isDataEmpty = !Array.isArray(allProduct) || allProduct.length < 1 || !allProduct;
  console.log(Array.isArray(allProduct));
  console.log("PRODUCTS")
  console.log(typeof(allProduct))
  console.log("ok")
  console.log(allProduct.length);
  console.log(allProduct);
  

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Products...
          </h1>
          <p>Life is hard enough already. Let us make it a little easier with our amazing products.</p>
        </div>
        <div className="home__filters">
            <SearchBar/>
            
        </div>
        { !isDataEmpty ? (
          <section>
             <h4 className='mt'>We Have Different Category of Products...</h4>
            <div className="home__cars-wrapper">
           

            

              {allProduct?.map((products) => (
                <ProductCard title={products.title} id={products.id} description={products.description} price={products.price} thumbnail={products.thumbnail} discountPercentage={products.discountPercentage} rating={products.rating} stock={products.stock} brand={products.brand} category={products.category} />
              ))}
             

            </div>
            
          </section>
        ) :(
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no result.</h2>
             <p>{allProduct?.message}</p>
          </div>
         
        )
        }
      </div>
    </main>
  );
}





