import Vue from 'vue'
import App from './App.vue'
import cart from './components/cart.vue'

// 导入全局样式
import  './assets/statics/site/css/style.css'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import index from './components/index.vue'

// 导入axios
import axios from 'axios';
// 将这个设置给原型
Vue.prototype.$ajax = axios;

// 设置路由规则
let routes = [
  {path:'/',component:index},
  {path:'/index',component:index},
  {path:'/cart',component:cart}
]

// 实例化路由
const router = new VueRouter({
  routes:routes
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
