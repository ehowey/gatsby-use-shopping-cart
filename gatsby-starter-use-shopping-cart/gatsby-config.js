require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Use-Shopping-Cart`,
    description: `Kick off your next, great ecommerce project with this Stripe and use-shopping-cart starter. Use-shopping-cart provides a cart management and validation API layer for Stripe. Payments are all handled securely by Stripe.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-plugin-use-shopping-cart`,
      options: {
        mode: "client-only",
        stripePublicKey: process.env.GATSBY_STRIPE_PUBLIC_KEY,
        successUrl: "wwww.google.com",
        cancelUrl: "www.stripe.com",
        currency: "USD",
        allowedCountries: ["US", "GB", "CA"],
        billingAddressCollection: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-use-shopping-cart`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
