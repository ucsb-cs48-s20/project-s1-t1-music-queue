if (typeof window === "undefined") {
  /**
   * exposed to the server.
   */
  module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
    REDIRECT_URI: process.env.REDIRECT_URI,
    CLIENT_ID: process.env.CLIENT_ID
  };
} else {
  /*
   * Settings exposed to the client.
   */
  module.exports = {
    REDIRECT_URI: process.env.REDIRECT_URI,
    CLIENT_ID: process.env.CLIENT_ID
  };
}
