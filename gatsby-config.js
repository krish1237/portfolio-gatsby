module.exports = {
  siteMetadata: {
    title: "Infinity Salon Membership",
    titleTemplate: "%s | Infinity Salon",
    description: "Membership app for Infinity Salon",
    url: "", // No trailing slash allowed!
    image: "", // Path to your image you placed in the 'static' folder
    twitterUsername: "@krish_chilvery",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};