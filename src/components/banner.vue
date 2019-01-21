<template>
<div>
<swipe class="my-swipe banner">
  <swipe-item class="slide1 slide">
    <img src="../assets/images/slider1.jpg" alt=""/>
          <div class="text-box">
            <h2>Look Beautiful</h2>
            <p>Mobile Template</p>
          </div>
  </swipe-item>
  <swipe-item class="slide2 slide">
    <img src="../assets/images/slider2.jpg" alt=""/>
    <div class="text-box">
      <h2>Get a Discount</h2>
      <p>Mobile Template</p>
    </div>
  </swipe-item>
  <swipe-item class="slide3 slide">
    <img src="../assets/images/slider3.jpg" alt=""/>
    <div class="text-box">
      <h2>Welcome to <span>Evine</span></h2>
      <p>Mobile Template</p>
    </div>
  </swipe-item>
</swipe>
</div>
</template>
<style>
.banner{margin-top:0.8rem;height:4.3rem;position: relative;overflow: hidden; z-index: 1; margin-bottom:0.8rem;width: 6.4rem;margin: 0 auto;}
.banner .slide img{width:6.4rem;height:4.3rem; display:block;}
.banner .slide .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box h2 span{color:#ff8dae}
.text-box p{ line-height:100%;}
.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;} 
</style>
<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  components: {
    'swipe':Swipe,
    'swipe-item':SwipeItem
  }
}
</script>

