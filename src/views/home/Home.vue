<template>
  <div id="Home">
    <nav-bar class="Home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <child-home :banner="banner"/>
    <child-recommend :recommend="recommend"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import ChildHome from "./childcoms/childhome";
  import ChildRecommend from "./childcoms/childrecommend";

  import {gethomedata} from "network/home";


    export default {
        name: "Home",
        components: {
          NavBar,
          ChildHome,
          ChildRecommend
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
  .Home-nav {
    color: #fff;
    background: pink;
    box-shadow: 0 1px 1px rgba(100,100,100,0.2)
  }
</style>
