<template>
<div>
    <div class="blog">
     <ul>
       <li v-for="item of this.blogListi" :key="item.id">
         <img :src="item.url" />
         <div class="text">
            <p class="date">{{item.time}}<span>/{{item.admin}}</span></p>
            <a href="blog-single.html"><h4>{{item.title}}</h4></a>
            <p>{{item.conten}}</p>
            <router-link :to="{name:'detail',params:{id:item.id},query:{dataName:'blog'}}">
            <a class="link-more" href="blog-single.html">Read More <b>&gt;&gt;</b></a>
            </router-link>
          </div>
       </li>
     </ul>
     <div class="pagination">
				<ul class="clearfix">
					<li class="disabled"><a href="">1</a></li>
					<li><a href="">2</a></li>
					<li><a href="">3</a></li>
					<li><a href="">4</a></li>
					<li><a href="">5</a></li>
				</ul>
			</div>
   </div>
</div>
</template>
<style>
     .blog{clear: both;margin-bottom:1rem;margin-top:1rem;margin-bottom: 2.1rem;}
    .blog ul li{width: 5.07rem;margin: .2rem auto .3rem;}
    .blog ul li img{width: 5.07rem;height:3.37rem;border-radius: .1rem;margin: 0 auto;display: block }
    .blog ul li .text .date{color: #468189;font-size:.11rem;margin-top: .1rem;}
    .blog ul li .text .date span{display: inline-block; font-weight: 500;margin-left: .05rem; color: #ff8dae;}
    .blog ul li .text a h4{margin-bottom:.12rem; line-height:.23rem;font-weight: 500;font-size: .2rem;color: #000;margin-top: .1rem;} 
    .blog ul li .text p{font-family: 'Roboto', sans-serif;  color: #888; font-size: 13px;}
    .blog ul li .text .link-more{color: #ff8dae;font-weight: 600;margin-top: 8px;display: inline-block;}
    .blog ul li .text .link-more b{font-weight: 900;vertical-align: middle;}
    .blog .pagination ul{padding-left: .7rem;}
    .blog .pagination ul li{float:left;width: 0.32rem;height: 0.32rem;border-radius: 50%;text-align: center;line-height: 0.32rem;}
    .blog .pagination ul li.disabled{background:#ff8dae;}
    .blog .pagination ul li.disabled a{color: #fff;}
</style>
<script>
let top=0;
export default {
    data(){
        return {
            blogListi:[],
            blog:"blog"
        }
    },
    mounted(){
        axios({
            url:'/data/blog.data'
        }).then(
            res=>{
                this.blogListi=res.data
                console.log(this.blogListi)
            }
        )
    }  , updated(){
        document.documentElement.scrollTop = top
         console.log('updated groups',document.documentElement.scrollTop)
     },
     destroyed(){
         top=document.documentElement.scrollTop
        console.log('destroyed groups',top)
     },
}
</script>

