import { isProd } from "./isProd";
import fetch from "isomorphic-fetch";
import { Product } from "../pages/proizvodi";

export const getAllProducts = async (kategorija: string): Promise<Product[]> => {
    console.log("categorija", kategorija);
    const data = kategorija === 'Svi proizvodi' ? await fetch(`${isProd}/api/products`) : await fetch(isProd + "/api/products?kategorija=" + encodeURI(kategorija));
    const products = await data.json();
    return products
}