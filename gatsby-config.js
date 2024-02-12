const moment = require("moment");
// Query for all blog posts
// const rssPostQuery = `
// {
//   allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
//     edges {
//       node {
//         id
//         excerpt(pruneLength: 200)
//         html
//         frontmatter {
//           date
//           slug
//           title
//           tags
//           description
//         }
//       }
//     }
//   }
// }

// `;

// const createRssPost = (edge, site) => {
//   const { node } = edge;
//   return Object.assign({}, edge.node.frontmatter, {
//     description: edge.node.description,
//     date: moment.utc(`${node.frontmatter.date}`, "YYYY/MM/DDTHH:mmZ").format(),
//     url: site.siteMetadata.siteUrl + node.frontmatter.slug,
//     guid: site.siteMetadata.siteUrl + node.frontmatter.slug,
//     custom_elements: [
//       {
//         "content:encoded": edge.node.html.replace(
//           /(?<=\"|\s)\/static\//g,
//           `${site.siteMetadata.siteUrl}\/static\/`
//         ),
//       },
//     ],
//   });
// };

module.exports = {
  siteMetadata: {
    title: `gmlunesa`,
    description: `Official site of Goldy Mariz Lunesa, a software engineer who enjoys writing code and dreaming of electric sheep.`,
    author: `Goldy Mariz Lunesa | @gmlunesa`,
    image: `https://raw.githubusercontent.com/gmlunesa/gmlunesa.github.io/development/src/images/ogimage.png`,
    url: `https://gmlunesa.com`,
    siteUrl: `https://gmlunesa.com`,
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
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    // {
    //   resolve: "gatsby-source-hashnode",
    //   options: {
    //     username: "gmlunesa",
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Hashnode",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "hashnode",
        // Url to query from
        url: "https://gql.hashnode.com",
      },
    },
    // {
    //   resolve: "gatsby-plugin-feed",
    //   options: {
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) =>
    //           allMarkdownRemark.edges.map((e) => createRssPost(e, site)),
    //         query: rssPostQuery,
    //         output: "/rss.xml",
    //         title: "Goldy Mariz Lunesa's Blog",
    //         description:
    //           "A collection of Goldy Mariz Lunesa's digitized thoughts and musings, now accessible over the cyber web space.",
    //       },
    //     ],
    //   },
    // },

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
