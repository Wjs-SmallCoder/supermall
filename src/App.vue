<template>
  <div id="app">
<!--  router-view 用来展示vue 组件页面  -->
<!--    keep-alive 保证vue-router 刷新时不被刷新-->
    <keep-alive>
      <router-view/>
    </keep-alive>
<!--    tar-bar 导航组件-->
    <tar-bar>
<!--      tar-bar-item 导航内部组件-->
      <tar-bar-item path="/home">
          <div slot="item-name">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/about">
          <div slot="item-name">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/cart">
          <div slot="item-name">购物车</div>
      </tar-bar-item>
      <tar-bar-item path="/profile">
          <div slot="item-name">我的</div>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
  import {TarBar,TarBarItem} from "components/common/tarbar/index"

  export default {
    name: 'App',
    components: {
      TarBar,
      TarBarItem
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
