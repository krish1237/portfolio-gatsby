module.exports = {
  siteMetadata: {
    title: "Krish Chilvery",
    titleTemplate: "%s | Krish Chilvery",
    description:
      "Portfolio of Krish Chilvery",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/hero_avatar.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@krish_chilvery",
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};