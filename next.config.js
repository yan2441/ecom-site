module.exports = {
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_TOKEN,
  },
  images: {
    domains: ['https://cdn.shopify.com'],
  },
  reactStrictMode: true,
}
