<template>
<div>
     <div class="top">
        <div class="clearfix">
          <img src="../assets/images/prev.png" onclick="window.history.go(-1)" class="pre">
          <p>Evine</p>
          <input type="button" class="search">
        </div>
      </div>
    <div class="blog-single">
      <div class="container">
          <div class="contentext-image">
            <img :src="detail.url" alt="">
          </div>
          <div class="contentext-title">
            <p class="date">{{detail.time}} <span>/ {{detail.admin}}</span></p>
            <h4>{{detail.title}}</h4>
          </div>
          <div class="contentext-text">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officia soluta porro necessitatibus accusamus aliquam a laborum beatae labore? Doloremque, aut, iure? Explicabo a provident error, mollitia unde temporibus fuga.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ratione asperiores cupiditate obcaecati magnam dolor libero sequi quibusdam, veniam vitae.</p>
          </div>
          <div class="tag">
            <ul class="clearfix">
              <li class="title">Tag :</li>
              <li><a href="">hair</a></li>
              <li><a href="">colors</a></li>
              <li><a href="">curling</a></li>
              <li><a href="">beauty</a></li>
              <li><a href="">female</a></li>
              <li><a href="">hairstyle</a></li>
              <li><a href="">fashion</a></li>
            </ul>
          </div>
          <div class="comment-people">
            <div class="wrap-title">
              <h5>Comments</h5>
            </div>
            <div class="contentext">
              <div class="image">
                <img src="../assets/images/testimonial1.png" alt="">
              </div>
              <div class="text">
                <h5>Amanda Queen</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sequi</p>
                <p class="date">12 Jan, 2018<span><i></i>Reply</span></p>
              </div>
            </div>
            <div class="contentext">
              <div class="image">
                <img src="../assets/images/testimonial2.png" alt="">
              </div>
              <div class="text">
                <h5>Diandra</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sequi</p>
                <p class="date">12 Jan, 2018<span><i></i>Reply</span></p>
              </div>
            </div>
            <div class="contentext">
              <div class="image">
                <img src="../assets/images/testimonial3.png" alt="">
              </div>
              <div class="text">
                <h5>Giselle Lovia</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sequi</p>
                <p class="date">12 Jan, 2018<span><i></i>Reply</span></p>
              </div>
            </div>
          </div>
          <div class="comment-form">
            <div class="wrap-title">
              <h5>Leave Your Reply</h5>
            </div>
            <form>
              <input type="text" placeholder="Name">
              <input type="email" placeholder="Email">
              <textarea cols="30" rows="10" placeholder="Message"></textarea>
              <button class="button">Submit</button>
            </form>
          </div>
      </div>
    </div>
</div> 
</template>
<style>
/* .goback{width:1.5rem;height:1.4rem;text-align: center;background: #ff8dae;text-align: center;margin:0 auto;border-radius: .1rem;padding-top:.1rem;}
.goback img{display:inline-block; background-size:100%;} */
.top{width: 100%;background: #fff;height: .5rem;box-shadow:0 5px 5px #eee;margin-bottom: .25rem;}
 .top div{padding-top: .15rem;}
 .top div .pre{float: left;width: .2rem;height: .18rem;margin-left: .2rem;}
 .top div p{float: left;width: .2rem;height: .18rem;margin-left: 42%;font-size: .18rem;color: #666;}
 .top div .search{float:right;width: .18rem;height: .15rem;background: url(../assets/images/search.png);margin-right: .2rem;}
.blog-single{width:5.1rem;margin: 0 auto 2rem;}
.blog-single .goback{top: .2rem;left:.2rem;margin: .2rem;}
.blog-single .goback img{width: .5rem;height: .45rem;display: block}
.blog-single .contentext-image img {width: 5.1rem;height: 3.37rem;border-radius: .05rem;display: block;}
.blog-single .contentext-title {margin-bottom:.1rem;}
.blog-single .contentext-title .date {margin-top:.1rem;color: #468189;}
.blog-single .contentext-title span {font-weight: 500;color: #ff8dae;}
.blog-single .contentext-title h4 {line-height:.24rem;font-weight: 600;margin: .12rem 0;font-size: .18rem;}
.blog-single .contentext-text {margin-bottom: .15rem; color:#888;line-height: .24rem;}
.blog-single .tag {margin-bottom:.1rem;}
.blog-single .tag ul {padding: 0;margin: 0;}
.blog-single .tag ul li {display: inline-block;margin-right:.05rem;border: .01rem solid #eee;padding: 0 .08rem;border-radius:.05rem;background: #fafafa;margin-bottom:.1rem;}
.blog-single .tag ul li a {color: #888;}
.blog-single .tag ul li:first-child {border: 0;border-radius: 0;background: 0;padding: 0;font-weight: 500;font-size:.16rem;color: #333;}
.blog-single .comment-people {margin-bottom:.2rem;}
.blog-single .comment-people .wrap-title{margin-bottom: .1rem;font-size: .18rem;color: #666;}
.blog-single .comment-people .contentext {padding-bottom:.15rem;padding-top: .15rem;border-bottom: .01rem dashed #eee;}
.blog-single .comment-people .contentext .image img {border-radius: 50%;float: left;width:.45rem;margin-right:.1rem;}
.blog-single .comment-people .contentext .text h5 {margin-bottom:.08rem;font-size: .14rem;font-family: 'Roboto', sans-serif;}
.blog-single .comment-people .contentext .text {overflow: hidden;}
.blog-single .comment-people .contentext .text p{color: #888;}
.blog-single .comment-people .contentext .text .date {margin-bottom: 0;color: #468189}
.blog-single .comment-people .contentext .text .date span {margin-left:.1rem;color: #aaa;}
.blog-single .comment-people .contentext .text .date span i {margin-left:.05rem;color: #ff8dae;display: inline-block;width: .12rem;height: .12rem;background: url("../assets/images/detail_ico.png") no-repeat;background-position: 0 -2.28rem}
.blog-single .comment-people .comment-form h4 {margin-bottom:.1rem;}
.blog-single .comment-form {padding: 0;  margin-bottom: .1rem;font-size: .18rem;color: #666;}
.blog-single .comment-form form input{width:5.1rem;height: .35rem;padding-left: .1rem;display: block;border: 1px solid #ddd;margin:.15rem 0;color: #fff;box-sizing: border-box}
.blog-single .comment-form form textarea{border-radius: .08rem;width:5.1rem;height: .8rem;border: 1px solid #ddd;padding: .15rem; display: block;margin:.15rem 0;box-sizing: border-box}
.blog-single .comment-form form button{background-color: #9dbebb;color: #fff;border: 0;padding:.05rem .1rem; border-radius:.02rem; cursor: pointer; font-size:.13rem;margin-bottom: .5rem;}
.blog-single .comment-form h4 {margin-bottom: .15rem;}
</style>
<script>
export default {
  // props:['indexlist','dataName']
  data(){
    return {
      detail:{}
    }
  },
  mounted(){
    let id=this.$route.params.id;
    let dataName=this.$route.query.dataName;
    axios({
      url:'/data/'+dataName+'.data'
    }).then(res =>{
       this.detail=res.data[id-1]
       console.log(res.data[id-1]);
      }
    )
  }
}
</script>

