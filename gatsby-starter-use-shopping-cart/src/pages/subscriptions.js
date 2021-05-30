import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DebugCart from "../components/debugCart"
import SubscriptionCard from "../components/subscriptionCard"
import { useStripeSubscriptions } from "../hooks/use-stripe-subscriptions"

const Subscriptions = () => {
  const subscriptions = useStripeSubscriptions()
  return (
    <Layout>
      <Seo title="Subscriptions" />
      <h1>Subscriptions</h1>
      <div className="productsWrapper">
        {subscriptions.map(subscription => (
          <SubscriptionCard
            subscription={subscription}
            key={subscription.name}
          />
        ))}
      </div>
      <DebugCart />
    </Layout>
  )
}

export default Subscriptions
