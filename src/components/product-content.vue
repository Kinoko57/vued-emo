
<template>
     <div class="product">
        <h3>Product</h3>
        <ul>
        <li v-for="item of productList" :key="item.id">
            <a href="">
            <img :src="item.url" alt="">
            <p>{{item.title}}</p>
            <h4>{{item.price}}</h4>
            </a>
        </li>
        <!-- <li>
            <a href="">
                <img src="../assets/images/product2.png" alt="">
                <p>Soap Natural Ingredients</p>
                <h4>$11</h4>
            </a>
            </li>
            <li>
                <a href="">
                <img src="../assets/images/product3.png" alt="">
                <p>Makeup Brush With Bags</p>
                <h4>$18</h4>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../assets/images/product4.png" alt="">
                    <p>Oil With Real Fruit Aroma</p>
                    <h4>$32</h4>
                </a>
                </li>
                <li>
                    <a href="">
                    <img src="../assets/images/product5.png" alt="">
                    <p>Modern hair shaver</p>
                    <h4>$42</h4>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/images/product6.png" alt="">
                        <p>Cheap Original Scissors</p>
                        <h4>$22</h4>
                    </a>
                    </li> -->
        </ul>

        <div class="pagination">
            <ul>
                <li class="disabled"><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li><a href="">5</a></li>
            </ul>
        </div>

   </div>
</template>
<style>
     .product{width: 6.4rem;margin: 0 auto;}
    .product h3{font: .3rem/.4rem "";width:5.64rem;text-align: center;margin: 0 auto;}
    .product{clear: both;margin-bottom:1rem;margin-top:.2rem;margin-bottom: 2.1rem;}
    .product ul{width: 110%;overflow: hidden;}
    .product ul li{background: #eee;float: left;margin:.2rem 0 0 .26rem;width: 2.8rem;height: 3.01rem;}
    .product ul li a{display: block;color: #888}
    .product ul li a img{display: block;width: 2.13rem;height: 2.13rem;margin: .1rem auto;}
    .product ul li a p{width: 100%;text-align: center;}
    .product ul li a h4{color: #ff8dae;width: 100%;text-align: center;font: .24rem/.3rem "";margin-top: .1rem;}
    .product .pagination ul li{width: 0.32rem;height: 0.32rem;border-radius: 50%;text-align: center;line-height: 0.32rem;}
    .product .pagination ul li.disabled{background:#ff8dae;}
    .product .pagination ul li.disabled a{color: #fff;}
</style>
<script>
export default {
    props:["productList"]
}
</script>

