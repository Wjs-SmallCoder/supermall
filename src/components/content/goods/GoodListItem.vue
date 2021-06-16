<template>
  <div class="goods-list-item">
    <img :src="goodsitem.image" alt="">
    <div>
      <span class="title">
        {{ goodsitem.title }}
      </span>
      <span class="price">
        {{ '￥' + goodsitem.height }}
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodListItem",
        props: {
          goodsitem: {
            type: Object,
            default() {
              return {}
            }
          }
        },
        methods: {
          // 通过Vue 原型添加的$bus 能够获取到这个事件
          // imageLoad() {
          //   this.$bus.$emit('imageLoad')
          // }
        }
    }
</script>

<style scoped>
  .goods-list-item {
    width: 48%;
    text-align: center;
    padding-bottom: 8px;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 4px;
  }

  .goods-list-item span {
    font-size: 12px;
    font-weight: 400;
  }

  .price {
    color: red;
  }
</style>
