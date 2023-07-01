import { IProduct } from "@/interfaces/product.interface";
import { BASE_URL } from "@/url"

export const getAllProducts: () => IProduct[] | PromiseLike<IProduct[]> = async () => {
    const response = await fetch(BASE_URL);

    if (!response.ok) throw new Error("Unable to fetch products.");

    return response.json();
};

export const getProductById: (id: string) => IProduct | PromiseLike<IProduct> = async (id: string) => {
    const response = await fetch(
        `${BASE_URL}/${id}`
    );

    if (!response.ok) throw new Error("Unable to fetch product.");

    return response.json();
}