module.exports = {
  siteMetadata: {
    title: 'Hanh Ngiox',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-transition-link`,
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-less',
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/grandViewTypography`,
      },
    },
  ],
}
