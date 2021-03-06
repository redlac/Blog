module.exports = {
  siteMetadata: {
    title: `Calder's Blog`,
    author: `Calder Trombley`,
    description: `A blog about things I have learned.`,
    siteUrl: `https://gatsby-starter-blog-and-portfolio-demo.netlify.com/`,
    social: {
      twitter: `sum_of_space`,
    },
    projects: [
      {
        title: `Gatsby Starter Blog & Portfolio!`,
        description: `Gatsby official starter with portfolio section added!`,
        url: `https://gatsby-starter-blog-and-portfolio.netlify.com/`,
        moreLinks: [
          {
            type: `Github`,
            url: `https://github.com/alisalahio/gatsby-starter-blog-and-portfolio`,
          },
        ],
      },
      {
        title: `React`,
        description: `React's homepage is created with Gatsby!`,
        url: `https://reactjs.org/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
