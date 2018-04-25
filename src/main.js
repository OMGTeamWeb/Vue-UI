// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router'

import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false
console.log(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
