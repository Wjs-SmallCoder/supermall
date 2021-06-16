<template>
  <div id="Home">
    <nav-bar class="Home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
<!--    添加在前面，通过scroll 对象的offsetTop 值来判断是否固定，来达到顶吸效果-->
    <tab-control :titles="['流行','新款','精选']" @TabClick="TabClick" ref="tabcontrol1" class="tab-control" v-show="istabfixed"/>
<!--    这里的scroll 可以看作bscroll 里面的.wrapper 需要高度以及overflow:hidden-->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="ScrollPosition"
            :pull-up-load="true" @pullingUp="LoadMore"
    >
      <child-home :banner="banner" @childhome="imgload"/>
      <child-recommend :recommend="recommend" class="child-recommend"/>
      <bg-view/>
      <tab-control :titles="['流行','新款','精选']" @TabClick="TabClick" ref="tabcontrol2"/>
      <goods-list :goods="goods"/>
      <goods-list :goods="goods"/>
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
            isShowBackTop: false,
            taboffsettop: 0,
            istabfixed: false,
            SaveY: 0
          }
        },
        created() {
           this.gethomedata()

           this.gethomelist()
        },
        mounted() {
          // 通过GoodListItem 里面传递的$emit 事件通过$on 监听
          // this.$bus.$on('imageLoad', () => {
          //   console.log('----');
          // })
        },
        computed: {
          // 组件被激活时(使用)
          activated() {
              // 切换组件时使用保存的y 值来调用ScrollTo()
              this.$refs.scroll.ScrollTo(0,this.SaveY,0),
              this.scroll.refresh()
          },
          //组件没被激活时(未使用)
          deactivated() {
             // 切换组件时获取当前组件的y 值
              this.SaveY = this.$refs.scroll.getScrollY()
          }
        },
        methods: {
          //tarcontrol 点击
          TabClick(index) {
            // console.log(index);
            // 通过tabControl 组件的currentIndex 来同步两个tabcontrol 的值
            this.$refs.tabcontrol1.currentIndex = index,
            this.$refs.tabcontrol2.currentIndex = index
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

            // 让tabcontrol1 在到达第二个tabcontrol2 时使用
            this.istabfixed = (-position.y) > this.taboffsettop
          },

          LoadMore() {
            console.log('已经加载');
          },

          imgload() {
            // console.log(this.$refs.tabcontrol.$el.offsetTop);
            // $el 组件自带，能够使用组件自带的值
            // offsetTop 获取改组件(元素)于页面顶部的距离
            this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop
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
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 9;*/
  }

  tab-control {
    position: sticky;
    top: 44px;
  }

  .child-recommend {
    background-color: #fff;
  }

  .content {
    background-color: #fff;
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }

  .tab-control {
    position: relative;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
