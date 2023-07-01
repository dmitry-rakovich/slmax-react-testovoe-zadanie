import Product from "@/components/Product"
import { getAllProducts } from "@/services"
import { NextPage } from "next"
import Link from "next/link";

export const metadata = {
  title: 'Товары',
}

export const revalidate = 10;

const ProductsPage: NextPage = async () => {

  const products = await getAllProducts()
  return (
    <main className="main">
      <h1>Товары</h1>
      <div className="products-wrapper">
        {products.map((product) => (
          <div className="card">
            <Link href={`/products/${product.id}`}>
              <Product key={product.id} product={product}/>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
export default ProductsPage