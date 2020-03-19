/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

{
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        //name: `An`,
        //short_name: `GatsbyJS`,
        //start_url: `/`,
        //background_color: `#f7f0eb`,
        //theme_color: `#a2466c`,
        //display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-linaria",
  ]
}
