<template>
  <div id="Home">
    <nav-bar class="Home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
      <child-home :banner="banner"/>
      <child-recommend :recommend="recommend"/>
      <bg-view/>
      <tab-control id="tab-control" :titles="['流行','新款','精选']" @TabClick="TabClick"/>
      <goods-list :goods="goods"/>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import Scroll from "components/common/bscroll/bscroll"

  import TabControl from "components/content/TabControl"
  import {GoodsList,GoodsListItem} from "components/content/goods/index"

  import ChildHome from "./childcoms/childhome"
  import ChildRecommend from "./childcoms/childrecommend"
  import BgView from "./childcoms/bg-view"

  import {gethomedata,gethomelist} from "network/home"

    export default {
        name: "Home",
        components: {
          NavBar,
          Scroll,
          TabControl,
          GoodsList,
          GoodsListItem,
          ChildHome,
          ChildRecommend,
          BgView
        },
        data() {
          return {
            banner: [],
            recommend: [],
            goods: []
          }
        },
        created() {
           this.gethomedata()

           this.gethomelist()
        },
        methods: {
          //tarcontrol 点击
          TabClick(index) {
            console.log(index);
          },

          // 网络请求
          gethomedata() {
            gethomedata().then(res => (
              // console.log(res),
                this.banner = res.data.data.banner.list,
                this.recommend = res.data.data.recommend.list
            ))
          },
          gethomelist() {
            gethomelist().then(res => (
              // console.log(res)
              this.goods = res.data.data.banner.list
            ))
          }
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

  .content {
    height: 300px;
    overflow: hidden;
  }
</style>
