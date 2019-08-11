import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import './style/common.less'
import Vuelazyload from 'vue-lazyload'
import Lazyload from 'vue-lazyload-img'




//配置请求地址
axios.defaults.baseURL = process.env.VUE_APP_URL;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueAxios,axios);
Vue.use(Vant)
Vue.use(Lazyload,{
  fade: true,
  time: 300
})

Vue.use(Vuelazyload,{
  // loading:'./img/svg/banner.svg',
  // error: './img/svg/banner.png'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })

// router.afterEach((to,from,next) => {
//   window.scrollTo(0,0);
// })