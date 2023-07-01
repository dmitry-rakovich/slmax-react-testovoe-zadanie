import { IProductSingle } from "@/interfaces/product.interface";
import Link from "next/link";
import { FC } from "react";


const Product: FC<IProductSingle> = ({ product }) => {

  return (
    <>
      <h1>{product.name}</h1>
      <h2>{product.brand}</h2>
      <p>{product.price} BYN</p>
      <p>{product.amount} шт.</p>
    </>
  )
}

export default Product