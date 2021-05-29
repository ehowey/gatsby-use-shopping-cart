import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Ready to make some money?</h1>
      <p>
        Welcome to your new Gatsby ecommerce site using{" "}
        <a href="https://stripe.com/en-ca">Stripe</a> and{" "}
        <a href="https://useshoppingcart.com/">use-shopping-cart</a>. This a
        barebones starter so you can see how to wire up your own store.
      </p>
      <h2>What's inside</h2>
      <p>Now go sell something great.</p>
    </Layout>
  )
}

export default IndexPage
