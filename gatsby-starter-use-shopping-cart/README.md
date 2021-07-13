# Gatsby Starter Use-Shopping-Cart

This example is current as of Use-Shopping-Cart v3 and Gatsby v3. [gatsby-plugin-use-shopping-cart](https://www.gatsbyjs.com/plugins/gatsby-plugin-use-shopping-cart/) is used to handle the integration and setup of Gatsby and Use-Shopping-Cart.

This is a basic example of Use-Shopping-Cart with Gatsby. This example uses [client only mode](https://useshoppingcart.com/docs/getting-started-client-mode) for the product validation. The products themselves are sourced from Stripe dashboard using [gatsby-source-stripe](https://www.gatsbyjs.com/plugins/gatsby-source-stripe/).

Hooks are used to seperate concerns and handle the GraphQl queries.

Styling is as minimal as possible.

## To do

- Check a11y standards in case folks are copy pasting code
- Make the cart an actual modal with proper a11y support for the modal
- Implement an example of `setItemQuantity` in the cart
