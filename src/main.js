import Vue from 'vue'
import App from './App.vue'

// 这里没有在路径前面加上./ 会报<router-view> 找不到
import router from './router'

Vue.config.productionTip = false
// 在使用事件总线需要在这里给Vue 原型添加$bus, 面向Vue 对象
// Vue.prototype.$bus = new Vue()

new Vue({
  //将路由导入
  router,
  render: h => h(App)
}).$mount('#app')
