import React from 'react'
import { CartProvider } from 'use-shopping-cart'

export const wrapRootElement = ({ element }, pluginOptions) => {
  const {
    mode,
    stripePublicKey,
    successUrl,
    cancelUrl,
    currency,
    allowedCountries,
    billingAddressCollection
  } = pluginOptions

  return (
    <CartProvider
      mode={mode}
      stripe={stripePublicKey}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency={currency}
      allowedCountries={allowedCountries}
      billingAddressCollection={billingAddressCollection}
    >
      {element}
    </CartProvider>
  )
}
