import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueMeta, {
  // refreshOnceOnNavigation: true
})
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./assets/lang/zh'),
    'en': require('./assets/lang/en')
  }
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
