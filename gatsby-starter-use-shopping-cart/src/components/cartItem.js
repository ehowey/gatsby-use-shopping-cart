import React from "react"
import { useShoppingCart } from "use-shopping-cart"

const CartItem = ({ product }) => {
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { setItemQuantity } = useShoppingCart()
  console.log(product)
  return (
    <div>
      <p>{product.name}</p>
    </div>
  )
}

export default CartItem
