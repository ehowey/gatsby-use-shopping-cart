import { useStaticQuery, graphql } from "gatsby"
export const useStripeProducts = () => {
  const data = useStaticQuery(
    graphql`
      query StripeProductQuery {
        allStripePrice(filter: { active: { eq: true } }) {
          nodes {
            id
            active
            unit_amount
            type
            currency
            product {
              id
              name
              description
              images
            }
          }
        }
      }
    `
  )

  const rawProducts = data.allStripePrice.nodes

  const products = rawProducts.map(node => ({
    name: node.product.name,
    price_id: node.id,
    price: node.unit_amount,
    image: node.product.images[0],
    currency: node.currency,
  }))

  return products
}
