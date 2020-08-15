import { isProd } from "./isProd";
import fetch from "isomorphic-fetch";

export const getAllCategories = async () => {
    const data = await fetch(`${isProd}/api/categories`);

    const allCategories = await data.json();
    const categories = allCategories.map(e => e.category_name)
    return categories
}