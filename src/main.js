import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import './style/common.less'
import { Lazyload } from 'vant';

//配置请求地址
axios.defaults.baseURL = process.env.VUE_APP_URL;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueAxios,axios);
Vue.use(Vant)
Vue.use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
