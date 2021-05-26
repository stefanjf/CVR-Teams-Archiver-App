import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.config.productionTip = false
Vue.use(VueLodash, { name: 'custom', lodash: lodash })

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
