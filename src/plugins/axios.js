import axios from 'axios';
import store from '../store';
import * as types from '../store/types'
axios.interceptors.request.use(function (config) {
    // config 请求时发出的配置 修改配置
    //显示loading
    // console.log(store)
    store.dispatch(types.VIEW_LOADING,true)
    // console.log("显示loading",this.$store)
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
axios.interceptors.response.use(function (response) {
  store.dispatch(types.VIEW_LOADING,false)
    return response;
  }, function (error) {
    return Promise.reject(error);
  });


export default {
    install:function(Vue){
        window.axios=axios;
        Vue.prototype.$http=axios;
    }
}