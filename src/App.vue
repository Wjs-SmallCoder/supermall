<template>
  <div id="app">
    <router-view/>
    <tar-bar>
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
  import TarBar from "components/common/tarbar/TarBar";
  import TarBarItem from "components/common/tarbar/TarBarItem";

  export default {
    name: 'App',
    components: {
      TarBar,
      TarBarItem
    },

  }
</script>

<style>
  @import "assets/css/base.css";
</style>
