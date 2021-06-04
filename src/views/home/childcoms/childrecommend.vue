<template>
    <div class="child-recommend">
      <div class="child-recommend-item" v-for="item in recommend">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{ item.title }}</div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "childrecommend",
        props: {
          recommend: {
            type: Array,
            default() {
              return []
            }
          }
        }
    }
</script>

<style scoped>
  .child-recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 16px;
    border-bottom: 8px #eee solid;
  }

  .child-recommend a {
    text-decoration: none;
    color: #666;
  }

  .child-recommend-item {
    flex: 1;
  }

  .child-recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 8px;
  }

</style>
