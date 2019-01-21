<template>
  <div class="reg">
     <img src="../assets/images/prev.png" @click="goback" class="reg-pre">
    <p class="fhbtn"><img src="../assets/images/logo.png" onclick="window.history.go(-1)"></p>
  <div class="login-box">
    <p class="lsolid"></p>
    <div class="login">
        <router-link to="/login">登录</router-link>
          <span></span>
        <router-link to="/register">注册</router-link>
    </div>
    <p class="rsolid"></p>
  </div>
  <ul>
    <li class="lifirst">
      <input type="text" value=""/>
      <span>帐号</span>
    </li>
    <li>
      <input type="text" value=""/>
      <span>密码</span>
    </li>
  </ul>
  <div class="footbox">
    <input type="button" value="注 册" class="login-btn"/>
    <a href="javascript:;" class="tishi">忘记密码？</a>
  </div>
</div>
</template>
<style>
   .reg{max-width:6.4rem; margin:0 auto;padding-top: .6rem;}
    .reg .reg-pre{width: .45rem;height: .38rem;position: absolute;left: .2rem;top:.2rem}
    .reg .fhbtn{width:1.5rem;height:1.4rem;text-align: center;background: #ff8dae;text-align: center;margin:0 auto;border-radius: .1rem;padding-top:.1rem;}
    .reg .fhbtn img{ display:inline-block; background-size:100%;}
    .reg .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
    .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
    .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
    .reg .login-box{ position:relative;}
    .reg .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
    .reg .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
    .reg ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
    .reg ul li{height:0.95rem; position:relative;}
    .reg ul li.lifirst{border-bottom:1px solid #e5e7e8;}
    .reg ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
    .reg ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
    .reg .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
    .reg .login-btn{width:4.65rem;height:0.65rem; background:#ff8dae; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
    .reg .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
<script>
export default {
  methods:{
    goback(){
      console.log(this.$route)
      this.$route.go(-1)
    }
  }
}
</script>


