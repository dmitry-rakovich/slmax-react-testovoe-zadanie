export interface IProduct {
    id: number,
    brand: string,
    name: string,
    price: number,
    amount: number,
}

export interface IProductSingle {
    product: IProduct
}