import Vue from 'vue'
import App from './App.vue'

// 这里没有在路径前面加上./ 会报<router-view> 找不到
import router from './router'

Vue.config.productionTip = false

new Vue({
  //将路由导入
  router,
  render: h => h(App)
}).$mount('#app')
