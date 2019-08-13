import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      component: Index,
      redirect: 'home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/ip_cat',
          name: 'ip_cat',
          component: () => import('./views/Sort.vue')
        },
        {
          path: '/trolley',
          name: 'trolley',
          component: () => import('./views/Trolley.vue')
        },
        {
          path: '/mine',
          name: 'mine',
          component: () => import('./views/Mine.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/login/index.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to.path)
  next()
})

export default router

