// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "@/assets/iconfont/iconfont.css"

import Mint from 'mint-ui';
Vue.use(Mint);

// import clickoutsideContext from "mint-ui/src/utils/clickoutside"
// Vue.directive('clickoutside', {
//   bind: clickoutsideContext.bind,
//   unbind: clickoutsideContext.unbind
// });

Vue.config.productionTip = false

Vue.prototype.user = {name: "Qing", avatar: "https://tse4-mm.cn.bing.net/th/id/OIP-C.2ma1oNjR4iha0FDRecuvSgAAAA?w=218&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7"}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
