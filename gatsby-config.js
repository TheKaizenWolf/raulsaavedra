module.exports = {
  siteMetadata: {
    title: 'Raul Saavedra',
    description: 'Raul Saavedra',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
      },
    },
  ],
};
