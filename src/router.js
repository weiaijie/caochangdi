import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Home = () => import(/* webpackChunkName: "group-foo" */ './views/Home.vue')
const Sort = () => import(/* webpackChunkName: "group-foo" */ './views/Sort.vue')
const Trolley = () => import(/* webpackChunkName: "group-foo" */ './views/Trolley.vue')
const Mine = () => import(/* webpackChunkName: "group-foo" */ './views/Mine.vue')
const Index = () => import(/* webpackChunkName: "group-foo" */ './views/index.vue')
const Goods = () => import(/* webpackChunkName: "group-foo" */ './views/Goods.vue')
const error = () => import(/* webpackChunkName: "group-foo" */ './views/404.vue')

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
          component: Home
        },
        {
          path: '/ip_cat',
          name: 'ip_cat',
          meta: {
            title: '分类'
          },
          component: Sort
        },
        {
          path: '/trolley',
          name: 'trolley',
          meta: {
            title: '购物车'
          },
          component: Trolley
        },
        {
          path: '/mine',
          name: 'mine',
          meta: {
            title: '我的'
          },
          component: Mine
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {
        title: ''
      },
      component: Goods
    },
    {
      path: '*',
      name: '*',
      meta: {
        title: '404'
      },
      component: error
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to.path)
  document.title = to.meta.title
  next()
})

export default router

