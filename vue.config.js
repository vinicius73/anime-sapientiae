// Inside vue.config.js
const baseUrl = process.env.NODE_ENV === 'production'
  ? '/anime-sapientiae/'
  : '/'
const pushSw = `${baseUrl}push-sw.js`

module.exports = {
  baseUrl,
  pwa: {
    name: 'Anime Sapientiae',
    themeColor: '#1a2420',
    msTileColor: '#1a2420',
    appleMobileWebAppStatusBarStyle: '#1a2420',
    workboxOptions: {
      importScripts: [pushSw],
      skipWaiting: true
    }
  }
}
