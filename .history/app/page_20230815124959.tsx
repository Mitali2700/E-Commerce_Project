import {Hero} from "@/components";
import Image from "next/image";
import {SearchBar} from '../components/SearchBar'
export default function Home() {
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
              <CustomFilter title="fragrances" />
              <CustomFilter title="groceries" />
              <CustomFilter title="fskincare" />
              <CustomFilter title="laptops" />
              <CustomFilter title="smartphones" />
            </div>
        </div>
      </div>
    </main>
  );
}
