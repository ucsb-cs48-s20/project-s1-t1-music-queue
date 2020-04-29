if (typeof window === "undefined") {
  /**
   * MongoDB URI exposed to the server.
   */
  module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,      
  };
}
