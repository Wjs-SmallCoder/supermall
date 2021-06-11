<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

    export default {
        name: "bscroll",
        data() {
          return {
            scroll: null
          }
        },
        // mounted 挂载后执行
        mounted() {
          //setTimeout 能解决DOM 在better-scroll 里面加载过快的问题，但是在这个项目中不能向上拉到底

          // setTimeout(() => {
          //   this.scroll = new BScroll(this.$refs.wrapper,{
          //     },20)
          // })

          // this.scroll = new BScroll(this.$refs.wrapper,{})
        },
        // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
        // 当这个钩子被调用时，组件 DOM 已经更新，可以对 DOM 的操作。
        // 该钩子在服务器端渲染期间不被调用。
        updated() {
         // this.scroll = new BScroll(this.$refs.wrapper,{})

          //注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以使用 vm.$nextTick(vm 可以是this [指向对象])
          //里面是一个回调函数
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper,{})
          })
        }
    }

</script>

<style scoped>

</style>
