<template>
  <div id="Home">
    <nav-bar class="Home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <child-home :banner="banner"/>
    <child-recommend :recommend="recommend"/>
    <bg-view/>
    <tab-control id="tab-control" :titles="['流行','新款','精选']"/>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/TabControl"

  import ChildHome from "./childcoms/childhome";
  import ChildRecommend from "./childcoms/childrecommend";
  import BgView from "./childcoms/bg-view"

  import {gethomedata} from "network/home";


    export default {
        name: "Home",
        components: {
          NavBar,
          TabControl,
          ChildHome,
          ChildRecommend,
          BgView
        },
        data() {
          return {
            banner: [],
            recommend: []
          }
        },created() {
          gethomedata().then(res => (
            // console.log(res),
            this.banner = res.data.data.banner.list,
            this.recommend = res.data.data.recommend.list
          ))
      }
    }
</script>

<style scoped>
  #Home {
    padding-top: 44px;
  }

  .Home-nav {
    color: #fff;
    background: #FC7EA4;
    box-shadow: 0 1px 1px rgba(100,100,100,0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  #tab-control {
    position: sticky;
    top: 44px;
  }
</style>
