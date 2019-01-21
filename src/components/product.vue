<template>
    <div>
        <banner></banner>
        <productContnet :productList="productList"></productContnet>
    </div>
</template>
<script>
import banner from './banner';
import productContnet from './product-content';
let top=0;
export default {
    data(){
        return {
            productList:[]
            // top:{
            //     type:Number
            // }
        }
    },
    components:{
        banner, productContnet
    },
    mounted(){
        axios({
            url:'/data/product.data'
        }).then(
            res=>{
                this.productList=res.data;
                console.log('product',this.productList)
            }
        )
    },
    updated(){
        document.documentElement.scrollTop = top
         console.log('updated groups',document.documentElement.scrollTop)
     },
     destroyed(){
         top=document.documentElement.scrollTop
        console.log('destroyed groups',top)
     },
}
</script>

