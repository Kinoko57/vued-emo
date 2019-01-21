<template>
    <div class="nav">
      <ul class="clearfix">
          <router-link to="/index" tag="li" active-class="active"><a href="javascript:;">Home</a></router-link>
          <router-link to="/product" tag="li" active-class="active"><a href="javascript:;">Product</a></router-link>
          <router-link to="/blog" tag="li" active-class="active"><a href="javascript:;">Blog</a></router-link>
          <router-link to="/user" tag="li" active-class="active"><a href="javascript:;">User</a></router-link>
      </ul>
    </div>
</template>
<style>
    .nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
    .nav ul{width:5.64rem;height:0.8rem;padding: 0 0.502rem;margin: 0 auto;}
    .nav ul li{width:1.4rem;height:0.8rem;text-align: center;float: left;}
    .nav ul li a{ display:block;width:1.4rem;;height:0.8rem; text-align:center; font-size:0.3rem;line-height: 0.8rem; color:#333;}
    .nav ul li.active a{color:#ff8dae;}
</style>
