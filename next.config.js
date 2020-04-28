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
        if (isDev) return 'http://localhost:3000/App'
        if (isProd) return 'https://cs48-s20-s1-t1-qa.herokuapp.com/App'
        if (isStaging) return 'http://localhost:3000/App'
        return 'REDIRECT_URI:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      CLIENT_ID: (() => {
        if (isDev) return '1e8d5de1ecae449c848c0a2b909044b7'
        if (isProd) return '1e8d5de1ecae449c848c0a2b909044b7'
        if (isStaging) return '1e8d5de1ecae449c848c0a2b909044b7'
        return 'CLIENT_ID:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
    }
  
    // next.config.js object
    return {
      env,
    }
  }