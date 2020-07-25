import { isProd } from "./isProd";
import fetch from "isomorphic-fetch";
import { Product } from "../pages/proizvodi";

export const getAllProducts = async (kategorija: string): Promise<Product[]> => {

    const data = await fetch(isProd + "/api/products?kategorija=" + encodeURI(kategorija));
    const products = await data.json();
    return products
}