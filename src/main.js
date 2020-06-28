import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const G2 = require('@antv/g2')
const g2plot = require('@antv/g2plot')

Vue.prototype.$G2 = G2
Vue.prototype.$g2plot = g2plot
Vue.config.productionTip = false
import { Button, message, menu,icon} from 'ant-design-vue'

Vue.use(Button).use(menu).use(message).use(icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
