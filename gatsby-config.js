
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV

require("dotenv").config({
  path: `.env.${activeEnv}`,
})


module.exports = {
    plugins: [
      {
        resolve: 'gatsby-theme-stripe-checkout-button',
        options: {
          siteUrl: 'https://gatsby-theme-stripe-checkout-button-example.netlify.com/',
          STRIPE_API_KEY: process.env.GATSBY_API_STRIPE_API_KEY,
          STRIPE_SECRET_KEY: process.env.GATSBY_API_STRIPE_SECRET_KEY,
        }
      },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                `Montserrat`,
                `source sans pro\:300,400,400i,700` 
              ]
            }
        },
        'gatsby-plugin-emotion'
    ]
}