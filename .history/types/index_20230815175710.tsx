import {MouseEventHandler} from "react"
export interface CustomButtonProps {
    title : string;
    containerStyles ?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType:"button" | "submit";
}

export interface SeacrchManufactureProps {
    manufacture : string;
    setManufacture :(manufacture:string) => void;
}

export interface CarProps {
    id: number,
      title: string,     
      description: 'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
      price: 30,
      discountPercentage: 2.92,
      rating: 4.92,
      stock: 54,
      brand: 'Golden',
      category: 'home-decoration',
      thumbnail: 'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
      images: [Array]
    }
