import React from "react"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

const SubscriptionCard = ({ subscription }) => {
  const { addItem, checkoutSingleItem } = useShoppingCart()
  return (
    <div className="productCardWrapper">
      <h3>{subscription.name}</h3>
      <p>{subscription.description}</p>
      <p>
        Price:{" "}
        {formatCurrencyString({
          value: parseInt(subscription.price, 10),
          currency: subscription.currency,
        })}
      </p>
      <button onClick={() => addItem(subscription)}>Add to cart</button>
      <button
        onClick={() => checkoutSingleItem({ productId: subscription.price_id })}
      >
        Buy now
      </button>
    </div>
  )
}

export default SubscriptionCard
