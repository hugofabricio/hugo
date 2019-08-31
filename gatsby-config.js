module.exports = {
  siteMetadata: {
    title: `Hugo Fabricio`,
    description: `Um desenvolvedor Full Stack, founder da BRZ Digital, apaixonado por tecnologia e com bastante experiência no desenvolvimento de interfaces fieis ao layout e sistemas baseados em Laravel, atualmente cursando Análise e Desenvolvimento de Sistemas na FIAP e em busca de novos desafios.`,
    author: `@hugofabriicio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
