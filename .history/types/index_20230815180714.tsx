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

export interface CProps {
    id: number,
      title: string,     
      description: string,
      price: number,
      discountPercentage: number,
      rating: number,
      stock: number
      brand: string,
      category: string,
      thumbnail: string,
      images: string,
    }
