module.exports = {
  siteMetadata: {
    title: `gmlunesa`,
    description: `Official site of Goldy Mariz Lunesa, a software engineer who enjoys writing code and dreaming of electric sheep.`,
    author: `Goldy Mariz Lunesa | @gmlunesa`,
    image: `https://raw.githubusercontent.com/gmlunesa/gmlunesa.github.io/development/src/images/ogimage.png`,
    url: `https://gmlunesa.com`,
    siteUrl: `https://www.gmlunesa.com`,
    keywords: [
      "software engineer",
      "net developer Philippines",
      "Goldy Mariz Lunesa",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gmlunesa`,
        short_name: `gmlunesa`,
        start_url: `/`,
        background_color: `#1b1c1e`,
        theme_color: `#1b1c1e`,
        display: `minimal-ui`,
        icon: `src/images/gmlunesa-logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {},
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-0B2DCVGLMJ", // Google Analytics / GA
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
