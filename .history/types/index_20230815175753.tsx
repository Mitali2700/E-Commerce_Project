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
      price: number,
      discountPercentage: number,
      rating: number,
      stock: number
      brand: string,
      category: string,
      thumbnail: 'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
      images: [Array]
    }
