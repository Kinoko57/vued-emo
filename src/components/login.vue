<template>
<div>
   <div class="login">
     <img src="../assets/images/prev.png" onclick="window.history.go(-1)" class="login-pre">
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
        <input type="text" value="" v-model="username"/>
        <span>帐号</span>
        </li>
        <li>
        <input type="text" value="" v-model="password"/>
        <span>密码</span>
        </li>
    </ul>
    <div class="footbox">
        <input type="button" value="登 录" class="login-btn" @click="checkLogin"/>
        <a href="javascript:;" class="tishi">忘记密码？</a>
    </div>
    </div>
</div>
</template>
<style>
    .login{max-width:6.4rem; margin:0 auto;padding-top: .6rem;position: relative;}
    .login .login-pre{width: .45rem;height: .38rem;position: absolute;left: .2rem;top:.2rem}
    .login .fhbtn{width:1.5rem;height:1.4rem;text-align: center;background: #ff8dae;text-align: center;margin:0 auto;border-radius: .1rem;padding-top:.1rem;}
    .login .fhbtn img{ display:inline-block; background-size:100%;}
    .login .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.45rem;}
    .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
    .login span{ float:left;height:0.38rem;}
    .login .login-box{ position:relative;}
    .login .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
    .login .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
    .login ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
    .login ul li{height:0.95rem; position:relative;}
    .login ul li.lifirst{border-bottom:1px solid #e5e7e8;}
    .login ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
    .login ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0;border-left: 0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
    .login .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
    .login .login-btn{width:4.65rem;height:0.65rem; background:#ff8dae; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
    .login .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
<script>
import * as types from '../store/types';
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        checkLogin(){
            this.$store.dispatch({
                type:types.VIEW_USER,
                username:this.username,
                password:this.password
            }).then(()=>{
               console.log(this.$store.state.user)
                if(this.$store.state.user.author){
                    // console.log(this.$store.state.author)
                    this.$router.push('/user')
                }else{
                    this.$router.push('/error')
                }
            })
        }
    }
}
</script>


