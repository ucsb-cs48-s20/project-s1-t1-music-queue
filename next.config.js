 
  // Env explaination: https://github.com/zeit/next.js/tree/canary/examples/with-env-from-next-config-js
  module.exports = {
    env : {
      REDIRECT_URI: (() => {
         return process.env.REDIRECT_URI
      })(),
      CLIENT_ID: (() => {
        return process.env.CLIENT_ID
      })(),
    },
  
    // next.config.js object
  }