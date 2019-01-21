<template>
    <div class="index">
        <banner></banner>
        <indexContent :indexlist="list" :dataName="index"></indexContent>
        <appointent></appointent>
    </div>
</template>
<script> 
import banner from './banner';
import indexContent from './index-content';
import appointent from './appointent';
let top=0;
export default {

    data(){
        return {
            list:[],
            index:"index",
            // top:0
        }
    },
    components:{
        banner,indexContent,appointent
    },
    mounted(){
        this.$http({
            url:'/data/index.data'
        }).then(
            res=>{
            this.list=res.data;
            console.log(res.data)}
        )
    },
    updated(){
        document.documentElement.scrollTop=top;
        console.log('updated',top)
    },
    destroyed(){
       
       top=document.documentElement.scrollTop;
        console.log('destroyed',top)
    }
}
</script>

