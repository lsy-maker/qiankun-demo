import Vue from 'vue'
import VueRouter from 'vue-router'
import Antd from 'ant-design-vue'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import routes from './router'
import startQianKun from './micro'

Vue.config.productionTip = false

Vue.use(Antd)

Vue.use(VueRouter)

// 以下代码解决路由地址重复点击的报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

startQianKun()
