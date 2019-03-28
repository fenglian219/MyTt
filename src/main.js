import Vue from 'vue'
import App from './App.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'

// 导入全局样式
import  './assets/statics/site/css/style.css'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import index from './components/index.vue'

// 导入axios
import axios from 'axios';
// 将这个设置给原型
Vue.prototype.$axios = axios;
// 设置基地址
axios.defaults.baseURL="http://111.230.232.110:8899/";

// 设置全局过滤器
// 导入momentjs
import moment from 'moment';
Vue.filter("globalTimeFormat", function(value,timeTemplate){
  if(timeTemplate){
    return moment(value).format(timeTemplate);
  }else{
    return moment(value).format('YYYY-MM-DD');
  }
    
})


// 引入 Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 设置路由规则
let routes = [
  {path:'/',component:index},
  {path:'/index',component:index},
  {path:'/cart',component:cart},
  {path:'/detail/:id',component:detail}
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
