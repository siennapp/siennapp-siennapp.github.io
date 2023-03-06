// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
//  */

// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Default Starter`,
//     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//     author: `@gatsbyjs`,
//     siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
//   },
//   plugins: [
//     {
//       resolve: 'gatsby-plugin-typescript',
//       options: {
//         isTSX: true,
//         allExtensions: true,
//       },
//     },
//     `gatsby-plugin-image`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `contents`,
//         path: `${__dirname}/contents`,
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         // This will impact how browsers show your PWA/website
//         // https://css-tricks.com/meta-theme-color-and-trickery/
//         // theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//       },
//     },
//   ],
// }


module.exports = {
  siteMetadata: {
    title: `Sienna Portfolid`,
    description: `작업물 포트폴리오 리스트`,
    author: `@Sienna`,
    siteUrl: 'https://siennapp.github.io/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://siennapp.github.io/',
        stripQueryString: true,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: <https://gatsby.dev/offline>
    // `gatsby-plugin-offline`,
  ],
};