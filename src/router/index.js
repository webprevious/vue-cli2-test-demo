import Vue from 'vue'
import Router from 'vue-router'

import UploadFile from '@/views/uploadfile/UploadFile'
import Login from '@/views/login-verify/login'
import Register from '@/views/login-verify/register'
import Parent from '@/views/vue-slot/Parent.vue'
import Clipboard from '@/views/clipboard/Clipboard.vue'
import KeepAliveCom from '@/views/keep-alive/KeepAliveCom.vue'
import home from '@/views/keep-alive/views/home.vue'
import about from '@/views/keep-alive/views/about.vue'
import my from '@/views/keep-alive/views/my.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/uploadfile'
    },
    {
      path: '/uploadfile',
      name: 'UploadFile',
      component: UploadFile
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/slot',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/clip',
      name: 'Clipboard',
      component: Clipboard
    },
    {
      path: '/keep',
      name: 'Keep',
      component: KeepAliveCom,
      redirect: '/keep/home',
      children: [
        {
          path: '/keep/home',
          component: home
        },
        {
          path: '/keep/about',
          component: about
        },
        {
          path: '/keep/my',
          component: my
        }
      ]
    }
  ],
  scrollBehavior (to, from, position) {
    return { x: 0, y: 0 }
  }
})
