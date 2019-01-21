<template>
<div class="user">
  <div class="header">
    <router-link to="/index"> <b class="home">To Home</b></router-link>
    <h2><img src="../assets/images/bg-pricing3.jpg" alt=""/></h2>
    <div class="user-box">
       <a href="login_m.html">昵称</a>
         <span> | </span>
    <a @click="logout">注销</a>
    </div>
    <ul class="clear">
      <li>
        <span>0</span>
        <p>关注</p>
      </li>
      <li>
        <span>0</span>
        <p class="end">粉丝</p>
      </li>
    </ul>
  </div>
  <div class="docList">
    <ul>
      <li class="gk-text">
        <i></i>
        <p>公开博文</p>
        <b></b>
        <span>0</span>
      </li>
      <li class="mm-text">
        <i></i>
        <p>秘密博文</p>
        <b></b>
        <span>0</span>
      </li>
      <li class="cg-text">
        <i></i>
        <p>草稿箱</p>
        <b></b>
        <span>0</span>
      </li>
      <li class="sc-text">
        <i></i>
        <p>收藏夹</p>
        <b></b>
        <span>0</span>
      </li>
      <li class="my_cz">
        <i></i>
        <p>设置</p>
      </li>
    </ul>
  </div>
</div>
</template>
<style>
.user{width:100%; margin:0 auto; padding-bottom:2.5rem;background:#eee;}
.header{width:100%;height:2.84rem; background:#ff8dae; padding-top:0.4rem;position: relative;}
.header .home{position: absolute;top: .1rem;right:.2rem;font-size: .3rem;color: #fff;}
.header h2{width:1.2rem;height:1.2rem; border-radius:50%; margin:0 auto;}
.header h2 img{width:1.2rem;height:1.2rem;border-radius: 50%;}
.header .user-box{width:1.5rem; font-size:0.25rem; color:#fff; margin:0 auto; margin-top:0.2rem;}
.user-box a{color:#fff;width: .2rem;}
.header ul{ margin-top:0.2rem;}
.header ul li{width:50%;height:0.7rem; float:left; color:#fff;}
.header ul li span{height:0.37rem; line-height:0.37rem; text-align:center; display:block; font-size:0.25rem;}
.header ul li p{ text-align:center; font-size:0.3rem;height:0.32rem; line-height:0.32rem; border-right:1px solid #fff;}
.header ul li p.end{ border:0;}
.user .docList{width:6.4rem; margin:0 auto; margin-top:0.32rem;}
/* .docList ul{ border-top:0.01rem solid #7b7c7c;} */
.docList ul li{ background:#fff;height:0.79rem;margin-bottom: .05rem; }
.docList ul li span{ float:right;margin-right:0.14rem; margin-top:0.26rem;}
.docList ul li b{width:0.21rem;height:0.24rem; background:url(../assets/images/next_img.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.34rem; margin-top:0.28rem;}
.docList ul .gk-text i{width:0.37rem;height:0.37rem; background:url(../assets/images/gk_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.gk-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.docList ul .mm-text i{width:0.29rem;height:0.35rem; background:url(../assets/images/mm_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.32rem; margin-top:0.24rem;}
.mm-text p{ float:left; font-size:0.25rem;margin-left:0.35rem; margin-top:0.25rem;}
.docList ul .cg-text i{width:0.37rem;height:0.37rem; background:url(../assets/images/cg_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.cg-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.docList ul .sc-text i{width:0.37rem;height:0.37rem; background:url(../assets/images/sc_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.sc-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.docList ul .my_cz{ margin-top:0.42rem;}
.docList ul .my_cz i{width:0.37rem;height:0.37rem; background:url(../assets/images/my_cz.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.my_cz p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
</style>
<script>
import store from '../store';
import * as types from  '../store/types.js'
export default {
    data(){
      return {
        mag:{}
      }
    },
    beforeRouteEnter(to,from,next){
       if(store.state.user.author){
         next();
       }else{
         next('/login')
       }
    },
    methods:{
      logout(){
        store.dispatch({type:types.VIEW_USEROUT,author:false});
        this.$router.push('/index');
        console.log(this.$router)
      //删数据
      }
    }
  }
</script>
