import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import ProductCard from "../components/productCard/productCard"
import Cart from "../components/cart/cart"
import { useStripeProducts } from "../hooks/use-stripe-products"
import * as storeStyles from "./store.module.css"

const Store = () => {
  const products = useStripeProducts()
  return (
    <Layout>
      <Seo title="Store" />
      <h1>Store</h1>
      <div className={storeStyles.productsWrapper}>
        {products.map(product => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
      <Cart />
    </Layout>
  )
}

export default Store
