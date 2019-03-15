// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as Sentry from '@sentry/browser'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/reset.css'
import axios from '@/api/ajax'
Vue.use(ElementUI)

Sentry.init({
  dsn: 'https://8b31d618e29346d687277cdf6d832562@sentry.io/1401232',
  integrations: [new Sentry.Integrations.Vue({
    Vue,
    attachProps: true
  })]
})

Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
