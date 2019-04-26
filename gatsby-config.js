module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-htaccess`,
        options: {
          host: 'www.domain.com',
          https: true,
          www: true,
        },
      },
    ],
  }