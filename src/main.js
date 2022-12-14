import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.prototype.$store = store;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
