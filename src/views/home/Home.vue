<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
<h2>首页</h2>
<home-swiper :banners="banners"></home-swiper>
</div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'

import {getHomeMultidata} from 'network/home'


export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    // 1. 请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.data.banner;
      this.recommends = res.data.data.recommend;
    })
  }
}
</script>

<style>
.home-nav{
  background-color: pink;
  color: aliceblue;
}
</style>