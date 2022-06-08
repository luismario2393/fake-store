import { createContext } from "react";
import { IProduct } from "../interfaces";

export const ProductContext = createContext<IProduct[]>([]);
