// read the env file and fill up process.env with all the things in my .env file
require("dotenv").config();
// These two lines allow for css imports directly to js files
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: "openid profile email",
    REDIRECT_URI:
      process.env.REDIRECT_URI || "http://localhost:3000/api/callback",
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || "http://localhost:3000/",
    SESSION_COOKIE_SECRET:
      // This default is an arbitrary value which doesn't matter for development. Don't worry about it.
      process.env.SESSION_COOKIE_SECRET ||
      "viloxyf_z2GW6K4CT-KQD_MoLEA2wqv5jWuq4Jd0P7ymgG5GJGMpvMneXZzhK3sL",
    CLIENT_ID: process.env.CLIENT_ID,
    SESSION_COOKIE_LIFETIME: 7200, // 2 hours
    MONGODB_URI: process.env.MONGODB_URI // mongodb_uri()
  }
});
