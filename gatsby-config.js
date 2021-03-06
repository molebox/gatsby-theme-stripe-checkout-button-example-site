
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV

require("dotenv").config({
  path: `.env.${activeEnv}`,
})


module.exports = {
  siteMetadata: {
    title: 'gatsby-theme-stripe-checkout-button-example-site',
    description: 'An example site showcasing gatsby-theme-stripe-checkout-button',
    author: 'Hungry Bear Studio <roar@hungrybearstudio.com> (hungrybearstudio.com)',
    siteUrl: 'https://gatsby-theme-stripe-checkout-button-example.netlify.com/',
    twitter: '@studio_hungry'
  },
    plugins: [
      {
        resolve: 'gatsby-theme-stripe-checkout-button',
        options: {
          STRIPE_API_KEY: 'pk_test_sCZdKKv3RLpcLwCLybjQVKQE004MOo7pXE', // we can use this as it just identifies my stripe account
          STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
          siteUrl: 'https://gatsby-theme-stripe-checkout-button-example.netlify.com/',
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
        'gatsby-plugin-emotion',
    ]
}