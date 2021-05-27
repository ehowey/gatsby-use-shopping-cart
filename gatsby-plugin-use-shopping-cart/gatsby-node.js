//     Current API
//     mode,
//     stripePublicKey,
//     successUrl,
//     cancelUrl,
//     currency,
//     allowedCountries,
//     billingAddressCollection

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    mode: Joi.string()
      .required()
      .default(`client-only`)
      .description(
        `Checkout mode can be "client-only" or "checkout-session" only.`
      ),
    stripePublicKey: Joi.string()
      .required()
      .description(`Public key from your Stripe dashboard.`)
      .messages({
        // Override the error message if the .required() call fails
        'any.required': `"Stripe Public Key" needs to be provided. Get the correct value from your Stripe dashboard`
      }),
    successUrl: Joi.string()
      .required()
      .default(`https://useshoppingcart.com/`)
      .description(`Url redirect on a successful purchase.`),
    cancelUrl: Joi.string()
      .required()
      .default(`https://stripe.com/`)
      .description(`Url redirect on a cancelled purchase.`),
    currency: Joi.string()
      .required()
      .default(`USD`)
      .description(`Currency for transaction, see Stripe docs for details.`),
    billingAddressCollection: Joi.boolean()
      .default(true)
      .required()
      .description(`Boolean to enable billing address collection.`)
  })
}
