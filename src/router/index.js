import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Test from '@/components/Test'
import Layout from '@/components/layout'
import Rem from '@/components/Rem.vue'
import Up from '@/components/Up.vue'
import Row from '@/components/Row.vue'
import InRouter from '@/components/InRouter.vue'
import One from '@/components/One.vue'
import Two from '@/components/Two.vue'
import Auto from '@/components/Auto.vue'
import R from '@/components/R.vue'
import Parent from '@/components/Parent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/rem',
      name: 'Rem',
      component: Rem
    },
    {
      path: '/up',
      name: 'Up',
      component: Up
    },
    {
      path: '/row',
      name: 'Row',
      component: Row
    },
    {
      path: '/in',
      name: 'InRouter',
      component: InRouter,
      redirect: '/in/one',
      children: [
        {
          path: 'one',
          name: 'One',
          component: One
        },
        {
          path: 'two',
          name: 'Two',
          component: Two
        }
      ]
    },
    {
      path: '/auto',
      name: 'Auto',
      component: Auto
    },
    {
      path: '/aa',
      name: 'R',
      component: R
    },
    {
      path: '/p',
      name: 'Parent',
      component: Parent
    }
  ]
})
