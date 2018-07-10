// Inside vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/anime-sapientiae/'
    : '/',
  pwa: {
    name: 'Anime Sapientiae',
    themeColor: '#1a2420',
    msTileColor: '#1a2420',
    appleMobileWebAppStatusBarStyle: '#1a2420',
    workboxOptions: {
      importScripts: ['/push-sw.js'],
      skipWaiting: true
    }
  }
}
