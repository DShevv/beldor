import { StaticImageData } from "next/image";

export type ProductT = {
  id: number;
  name: string;
  image: string | StaticImageData;
  description: string;
  sku: string;
  specifications: {
    name: string;
    value: string;
  }[];

};