import { NextPage } from "next";
import { IProduct } from "@/interfaces/product.interface";
import Product from "@/components/Product";
import { getAllProducts, getProductById } from "@/services";
import Link from "next/link";

interface IProps {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id }}:IProps) {

  return {
    title: `Товар №${id}`,
  };
}

export const generateStaticParams = async () => {
  const products: IProduct[] = await getAllProducts()
 
  return products.map((product) => ({
    slug: product.id,
  }))
}

export const revalidate = 10;


const ProductPage: NextPage<IProps> = async ({params : {id}}) => {
  const product = await getProductById(id);
  return (
    <main className="main">
      <Product product={product}/>
      <Link href={`/products/${product.id}/edit`}>Изменить товар</Link>
    </main>
  )
}

export default ProductPage
