import Vue from "vue"
import VueRouter from "vue-router"

// 懒加载
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const About = () => import('../views/about/About')

Vue.use(VueRouter)

//下面的两个变量函数用来解决在当前页面点击当前模块的错误信息(冗余导航问题)
//使用push的方法
const VueRouterPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//使用replace的方法
const VueRouterReplace = VueRouter.prototype.replace
  VueRouter.prototype.replace = function replace (to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}

const routes = [{
  path: '',
  redirect: '/home'
},{
  path: '/home',
  component: Home
},{
  path: '/cart',
  component: Cart
},{
  path: '/profile',
  component: Profile
},{
  path: '/about',
  component: About
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
