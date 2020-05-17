const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCss(
  withSass({
    distDir: ".next",
    env: {
      googleMapApiKey: process.env.GOOGLE_MAP_MERIRU_KEY,
    },
  })
);
