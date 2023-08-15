"use client"
// import Image from "next/image";
import {CustomFilters, Hero, ProductCard, SearchBar } from '@/components'
import {fetchProduct} from '@/utils'

export default async function Home() {
  const allProduct = await fetchProduct();
  console.log(allProduct)
  JSON.parse(JSON.stringify())
  const JSArr = JSON.parse(allProduct);
  const isDataEmpty = !Array.isArray(JSArr) || JSArr.length < 1 || !JSArr;
  console.log(Array.isArray(allProduct));
  console.log("PRODUCTS")
  // console.log(typeof(allProduct))
  console.log("12")
  console.log(JSArr.length);
  

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
            <div className="home__filter-container">
              <CustomFilters title='fragrances'/>
              <CustomFilters title="groceries" />
              <CustomFilters title="skincare" />
              <CustomFilters title="laptops" />
              <CustomFilters title="smartphones" />
            </div>
        </div>
        { !isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allProduct?.map((title) => (
                <ProductCard title={title} id={0} description={""} price={0} thumbnail={""}/>
              ))}
             

            </div>
            We Have Different Category of Products...
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





