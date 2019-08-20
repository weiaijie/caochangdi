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
          meta: {
            title: '草场地首页'
          },
          component: () => import('./views/Home.vue')
        },
        {
          path: '/ip_cat',
          name: 'ip_cat',
          meta: {
            title: '分类'
          },
          component: () => import('./views/Sort.vue')
        },
        {
          path: '/trolley',
          name: 'trolley',
          meta: {
            title: '购物车'
          },
          component: () => import('./views/Trolley.vue')
        },
        {
          path: '/mine',
          name: 'mine',
          meta: {
            title: '我的'
          },
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
  // document.title = to.meta.title
  next()
})

export default router

