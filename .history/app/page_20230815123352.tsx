import {Hero} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Products...
          </h1>
          <p>Life is hard enough already. Let us make it a little easier with our </p>
        </div>
      </div>
    </main>
  );
}
