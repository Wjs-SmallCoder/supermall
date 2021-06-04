<template>
    <div>
      <Swiper>
        <Swiper-item v-for="item in banner">
          <a :href="item.link">
            <img :src="item.image" alt="">
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
        components: {
          Swiper,
          SwiperItem
        }
    }
</script>

<style scoped>

</style>
