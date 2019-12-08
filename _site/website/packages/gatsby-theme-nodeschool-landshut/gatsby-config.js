/*eslint-env node */
const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: `Nodeschool Landshut`,
    description: `This is my  nodeschool instance.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NodeSchool Landshut`,
        short_name: `nodeschool`,
        start_url: `/`,
        background_color: `#2C97D4`,
        theme_color: `#2C97D4`,
        display: `minimal-ui`,
        icon: path.relative(
          __dirname,
          require.resolve(`gatsby-theme-nodeschool/src/images/nodeschool-logo.png`),
        ),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: process.env.SENTRY_DSN,
      },
    },
    {
      resolve: `gatsby-theme-nodeschool`,
      options: {
        title: `NodeSchool Landshut`,
        description: `Website for NodeSchool Landshut.`,
        twitter: `@NodeSchoolLa`,
        github: `nodeschool/landshut`,
        url: `https://halkeye.github.io/gatsby-theme-nodeschool/`,
        slack: ``,
        meetupGroup: `nodeschool-landshut`,
        email: `daniel.hilpoltsteiner@gmail.com |`,
        mailchimpSubscribeUrl: `https://nodeschoolyvr.us20.list-manage.com/subscribe/post?u=703e823487e1f52bfbe0cc32d&amp;id=34f1146956`,
        credits: {
          logo: {
            name: `Daniel Hilpoltsteiner`,
            url: `https://daniel-hilpoltsteiner.de/`,
          },
        },
      },
    },
  ],
};
