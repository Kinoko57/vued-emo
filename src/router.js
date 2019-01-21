import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import index from './components/index.vue';
// import product from './components/product.vue';
//异步组件 懒加载
let product =()=>{return import(/*webpackChunkname:"product*/'./components/product.vue')}
// import blog from './components/blog.vue';
let blog =()=>{return import(/*webpackChunkname:"blog*/'./components/blog.vue')}
import user from './components/user.vue';
import login from './components/login.vue';
import register from './components/register.vue';
import error from './components/error.vue';
import detail from './components/detail.vue'
let routes=[
  {path:'/index',component:index},
  {path:'/product',component:product},
  {path:'/blog',component:blog},
  {path:'/user',component:user},
  {path:'/login',component:login},
  {path:'/register',component:register},
  {path:'/detail',component:detail,name:"detail"},
  {path:'/',redirect:'/index'},
  {path:'*',component:error}
]
export default new Router({
     routes,
     scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
