<template>
  <div>
    
    <tabbar>
        <tab-bar-item path="/home" activeColor="yellow">
          <!-- 通过插槽插过来 -->
          <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" >
          <img slot="item-icon-active" src="~assets/img/tabbar/homeactive.svg" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path='/my'>
          <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/home.svg" alt="">
          <div slot="item-text">我的</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor='blue'>
          <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/homeactive.svg" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path='/category'>
          <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/home.svg" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>
    </tabbar>
  </div>
</template>

<script>
// 上边想用tabbar和tabbaritem标签的话，需要在这里导入，并且在组件中注册。
import Tabbar from 'components/common/tabbar/Tabbar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components:{
    Tabbar,
    TabBarItem
  },
  
}
</script>

<style>
/* 在style中引用base.css */
@import "~assets/css/base.css";


</style>
