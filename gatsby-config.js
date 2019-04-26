module.exports = {
    plugins: [
      `gatsby-plugin-sass`,
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