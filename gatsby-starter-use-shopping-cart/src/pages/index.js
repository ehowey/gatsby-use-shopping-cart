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
      <p>
        This store is using{" "}
        <a href="https://useshoppingcart.com/docs/getting-started-client-mode">
          client-only mode
        </a>{" "}
        which means that product data is being sourced directly from your Stripe
        dashboard and Stripe is handling the product validation for you on their
        backend. Alternatively you could use{" "}
        <a href="https://useshoppingcart.com/docs/getting-started-serverless">
          serverless mode
        </a>
        to integrate with product data from a headless CMS and handle your own
        server side validation.
      </p>
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
