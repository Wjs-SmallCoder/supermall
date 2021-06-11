<template>
  <div id="goodslist">
    <goods-list-item v-for="item in goods" :goodsitem="item"/>
  </div>
</template>

<script>
    import GoodsListItem from "./GoodListItem"

    export default {
        name: "GoodsList",
        components: {
          GoodsListItem
        },
        props: {
          goods: {
            type: Array,
            default() {
              return []
            }
          }
        }
    }
</script>

<style scoped>
  #goodslist {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 10px;
  }
</style>
