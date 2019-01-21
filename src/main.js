import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import "./assets/css/base.css"
import "./assets/js/font" ;
import axios from './plugins/axios';
Vue.use(axios)
//安装注册通用组件
import loading from './components/loading';
Vue.use(loading);
//引入动画库
import 'animate.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

