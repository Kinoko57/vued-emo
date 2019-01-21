<template>
  <div>
    <loading v-show="loading"></loading>
    <headerbar v-show="header"></headerbar>
    <!-- <banner></banner> -->
    <!-- <transition
    mode="out-in"
    enter-active-class="animated fadeIn"
    > -->
      <router-view></router-view>
    <!-- </transition> -->
    <!-- <blog></blog> -->
    <!-- <user></user> -->
    <footerbar v-show="footer"></footerbar>
  </div>
</template>

<style>
</style>
<script>
// 引入  模块
import headerbar from "./components/header";
import footerbar from "./components/footer";
import index from './components/index';
import {mapGetters} from 'vuex';
import * as types from './store/types'
export default {
  //  注册组件
  components:{
     headerbar,footerbar,index
  },
  computed:mapGetters([
    'header','footer','loading'
  ]),
  watch:{//路由监听
    $route:{
     handler: function(to) {
        let path=to.path;
        if(/index|product/.test(path)){
          this.$store.dispatch(types.VIEW_HEAER,true);
          this.$store.dispatch(types.VIEW_FOOTER,true)
        }else if(/blog/.test(path)){
          this.$store.dispatch(types.VIEW_HEAER,true);
          this.$store.dispatch(types.VIEW_FOOTER,false)
        }else if(/user/.test(path)){
          this.$store.dispatch(types.VIEW_HEAER,false);
          this.$store.dispatch(types.VIEW_FOOTER,true)
        }else if(/detail|login|register/){
           this.$store.dispatch(types.VIEW_HEAER,false);
          this.$store.dispatch(types.VIEW_FOOTER,false)
        }
      },
      immediate: true
    }
  }
}
</script>
