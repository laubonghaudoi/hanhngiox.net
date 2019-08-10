module.exports = {
  siteMetadata: {
    title: 'HanhNgiox',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-remark`,
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
