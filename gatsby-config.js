module.exports = {
  siteMetadata: {
    title: `Hugo Fabricio`,
    description: `Um desenvolvedor Full Stack, founder da BRZ Digital, apaixonado por tecnologia e com bastante experiência no desenvolvimento de interfaces fieis ao layout e sistemas baseados em Laravel, atualmente cursando Análise e Desenvolvimento de Sistemas na FIAP e em busca de novos desafios.`,
    author: `@hugofabriicio`,
    siteUrl: "http://localhost:8000",
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hugo Fabricio`,
        short_name: `Hugo Fabricio`,
        start_url: `/`,
        background_color: `#232532`,
        theme_color: `#232532`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
