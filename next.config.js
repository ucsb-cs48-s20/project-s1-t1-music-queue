const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants')
  
  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  module.exports = phase => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  
    const env = {
      REDIRECT_URI: (() => {
        if (isDev) return process.env.REDIRECT_URI
        if (isProd) return process.env.REDIRECT_URI
        if (isStaging) return process.env.REDIRECT_URI
        return 'REDIRECT_URI:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      CLIENT_ID: (() => {
        if (isDev) return process.env.CLIENT_ID
        if (isProd) return process.env.CLIENT_ID
        if (isStaging) return process.env.CLIENT_ID
        return 'CLIENT_ID:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
    }
  
    // next.config.js object
    return {
      env,
    }
  }