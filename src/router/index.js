import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 登录
  {
    path: '/userlogin',
    name: 'Userlogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Userlogin.vue'),
  },
  // 注册
  {
    path: '/userregist',
    name: 'Userregist',
    component: () => import(/* webpackChunkName: "about" */ '../views/Userregist.vue')
  },
  // 个人信息
  {
    path: '/usermsg',
    name: 'Usermsg',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usermsg.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
