import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DebugCart from "../components/debugCart"
import ProductCard from "../components/productCard"
import { useStripeProducts } from "../hooks/use-stripe-products"

const Store = () => {
  const products = useStripeProducts()
  return (
    <Layout>
      <Seo title="Store" />
      <h1>Store</h1>
      <div className="productsWrapper">
        {products.map(product => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
      <DebugCart />
    </Layout>
  )
}

export default Store
