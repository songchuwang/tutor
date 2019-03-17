import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Information from '../pages/information/Infor'
import Require from '../pages/require/Require'
import Administrator from '../pages/administrator/Administrator'
import Login from '../pages/login/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/require',
      name: 'Require',
      component: Require
    },
    {
      path: '/administrator',
      name: 'Administrator',
      component: Administrator
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
