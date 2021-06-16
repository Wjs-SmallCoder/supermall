<template>
    <div>
      <Swiper>
        <Swiper-item v-for="item in banner">
          <a :href="item.link">
<!--            @load 监听，监听图片是否加载以及加载次数-->
            <img :src="item.image" alt="" @load="imgload">
          </a>
        </Swiper-item>
      </Swiper>
    </div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper/index"

    export default {
        name: "childhome",
        props: {
          banner: {
            type: Array,
            default() {
              return []
            }
          }
        },
        data() {
          return {
            isLoad: false
          }
        },
        components: {
          Swiper,
          SwiperItem
        },
        methods: {
          imgload() {
            // console.log('1');
            //监听组件轮播图的图片是否加载完成
            if(!this.isLoad) {
              this.$emit('childhome'),
              //  只需获取一次图片加载完成的高度
              this.isLoad = true
            }
          }
        }
    }
</script>

<style scoped>

</style>
