<template>
  <div id="Home">
    <nav-bar class="Home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
<!--    这里的scroll 可以看作bscroll 里面的.wrapper 需要高度以及overflow:hidden-->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="ScrollPosition"
            :pull-up-load="true" @pullingUp="LoadMore">
      <child-home :banner="banner"/>
      <child-recommend :recommend="recommend"/>
      <bg-view/>
      <tab-control id="tab-control" :titles="['流行','新款','精选']" @TabClick="TabClick"/>
      <goods-list :goods="goods"/>
    </scroll>
<!--    native 修饰符 监听组件事件-->
    <back-top @click.native="BackTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import Scroll from "components/common/bscroll/bscroll"

  import TabControl from "components/content/TabControl"
  import {GoodsList,GoodsListItem} from "components/content/goods/index"
  import BackTop from "components/content/backtop/backtop"

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
          BackTop,
          ChildHome,
          ChildRecommend,
          BgView
        },
        data() {
          return {
            banner: [],
            recommend: [],
            goods: [],
            isShowBackTop: false
          }
        },
        created() {
           this.gethomedata()

           this.gethomelist()

           this.$bus.$on('imageLoad', () => {
             console.log('----');
           })
        },
        methods: {
          //tarcontrol 点击
          TabClick(index) {
            console.log(index);
          },

          //返回页面顶部
          BackTopClick() {
            // 通过$refs 来后去组件对象里面的methods 内的函数
            this.$refs.scroll.ScrollTo(0,0)
          },

          //通过获取position 来修改isShowBackTop 的值来动态展示回顶图标
          ScrollPosition(position) {
            this.isShowBackTop = (-position.y) > 200
            // console.log(position.y);
          },

          LoadMore() {
            console.log('已经加载');
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

              // this.$refs.scroll.finishPullUp()
            ))
          }
        }

    }
</script>

<style scoped>
  #Home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
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
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
</style>
