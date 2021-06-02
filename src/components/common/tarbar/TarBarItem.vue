<template>
  <div class="tarbar-item" @click="tarbarClick">
    <div :style="activeStyle">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TarBarItem",
        props: {
          // 这里的path 接受来自App.vue 里面tar-bar-item 标签里面的path 属性
          path: String,
          activeColor: {
            type: String,
            default: 'blue'
          }
        },
        data() {
          return {
            // isActive: true
          }
        },
      computed: {
          // 判断是否处于活跃（点击后）
          isActive() {
            // indexOf(str对象) 有的话返回str对象内字符串的位置（可以当作true），没有返回-1
            // return this.$route.path.indexOf(this.path) !== -1;
          },
          activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
          }
      },
      methods: {
          tarbarClick() {
            // if (this.$route.path == this.path) {
            //
            // }
            // 在App.vue 的path 传给这个vue 的path ，点击就把$route 的path 赋值给$router 的path
            this.$router.replace(this.path)
            // console.log(this.$route);
            // console.log(this.path);
          }
      }
    }
</script>

<style scoped>

  .tarbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    line-height: 49px;
    font-size: 14px;
  }

</style>
