import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import 'normalize.css'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
