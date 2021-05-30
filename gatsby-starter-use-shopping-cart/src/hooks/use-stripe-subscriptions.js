import { useStaticQuery, graphql } from "gatsby"
export const useStripeSubscriptions = () => {
  const data = useStaticQuery(
    graphql`
      query StripeSubscriptionQuery {
        allStripePrice(
          filter: { type: { eq: "recurring" }, active: { eq: true } }
        ) {
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
            }
            recurring {
              interval
              interval_count
              usage_type
            }
          }
        }
      }
    `
  )

  const rawSubscriptions = data.allStripePrice.nodes

  const subscriptions = rawSubscriptions.map(node => ({
    name: node.product.name,
    description: node.product.description,
    price_id: node.id,
    price: node.unit_amount,
    currency: node.currency,
  }))

  return subscriptions
}
