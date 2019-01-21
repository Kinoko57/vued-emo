<template>
    <div class="newsList">
      <ul>
        <li v-for="item of indexlist" :key="item.id">
          <a class="clearfix">
            <router-link :to="{name:'detail',params:{id:item.id},query:{dataName:'index'}}">
             <img :src="item.url" alt="" class="newList-l">
              <div class="newList-r">
                <h3>{{item.title}}</h3>
                <p>{{item.time}}</p>
              </div>
             </router-link>
          </a>
        </li>
       </ul>
    </div>
</template>
<style>
.newsList{width: 6.4rem;margin: 0 auto;}
.newsList ul{ padding:0 0.4rem;background: #fff;margin-bottom: .1rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li a{display: block;height: 1.32rem;}
.newsList ul li a img{float:left; font-size:0.33rem;width:2.3rem;height: 1.32rem;}
.newsList ul li a .newList-r{float:left;margin-left: 0.15rem}
.newsList ul li a .newList-r h3{font-size: 0.15rem;line-height:0.22rem;}
.newsList ul li a .newList-r p{color: #468189;font-size:0.11rem;margin-top: 0.1rem;}
.newsList{clear: both; background:#fff;}
</style>
<script>
export default {
  props:['indexlist'],
  mounted(){
    
  }
}
</script>

