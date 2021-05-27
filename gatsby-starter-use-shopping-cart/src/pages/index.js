import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Product from "../components/product"
import Cart from "../components/cart"

import { useStripeProducts } from "../hooks/use-stripe-products"

const IndexPage = () => {
  const products = useStripeProducts()

  console.log(products)

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Store</h1>
      <p>
        Welcome to your new Gatsby ecommerce site using Stripe and
        use-shopping-cart.
      </p>
      <p>Now go sell something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      {products.map(product => (
        <Product product={product} />
      ))}
      <Cart />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
