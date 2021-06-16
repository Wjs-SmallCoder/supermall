<template>
<!--  使用better-scroll 的基本结构-->
<!--  content 只允许一个元素 slot 不管有几个都算作一个-->
<!--  ref 可以在js 通过$refs.ref 的值来获取-->
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
        props: {
            probeType: {
              type: Number,
              default: 0
            },
            pullUpLoad: {
              type: Boolean,
              default: false
            }
        },
        data() {
          return {
            scroll: null
          }
        },
        methods: {
          ScrollTo(x,y,time=300) {
            // scrollTo(x 轴的值，y 轴的值，返回动画时间)
            // 判断this.scroll 对象是否存在
            this.scroll && this.scroll.scrollTo(0,0,time)
          },
          // 将当前的scroll.y 的值传递出去，便于在组件切换时能够放回上一次组件的位置
          getScrollY() {
            //scroll.y 当前组件的y 值
            return this.scroll ? this.scroll.y : 0
          }
          // finishPullUp() {
          //   // 调用finishPullUp 可以执行多次上拉
          //   this.scroll.finishPullUp()
          //   // console.log(12);
          // }
        },
        // mounted 挂载后执行
        mounted() {
          //setTimeout 能解决DOM 在better-scroll 里面加载过快的问题，但是在这个项目中不能向上拉到底
          //
          // setTimeout(() => {
          //   this.scroll = new BScroll(this.$refs.wrapper,{
          //     },20)
          // })
          // this.scroll = new BScroll(this.$refs.wrapper,{
          //   click: true,
          //   probeType: this.probeType,
          //   pullUpLoad: this.pullUpLoad
          // })

          setTimeout(() => {
            this.scroll = new BScroll(this.$refs.wrapper,{
              // 让div 等其他标签能够触发点击事件
              // 不添加则BScroll 对象里面除button 标签以外都不能触发click 事件
              click: true,
              // probeType 是否监听滚动的position 值
              probeType: this.probeType,
              // pullUpLoad 监听上拉动作
              pullUpLoad: this.pullUpLoad
            })
            // 监听scroll 对象的scroll 事件
            // 这里监听scroll 的position 值
            this.scroll.on('scroll',(position) => {
              // console.log(position);
              //$emit 将这里的值通过事件传递过去
              this.$emit('scroll',position)
            })

            // 监听上拉事件
            this.scroll.on('pullingUp',() => {
              this.$emit('pullingUp')
              //finishPullUp 可以执行多次上拉加载
              this.scroll.finishPullUp()
            })

            // 刷新，使图片加载后的高度被计算
            // 会调用一次pullingUp
            this.scroll.refresh()
          },400)

        },
        // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
        // 当这个钩子被调用时，组件 DOM 已经更新，可以对 DOM 的操作。
        // 该钩子在服务器端渲染期间不被调用。
        updated() {
          // this.scroll = new BScroll(this.$refs.wrapper,{})
          //注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以使用 vm.$nextTick(vm 可以是this [指向对象])
          //里面是一个回调函数
          // this.$nextTick(() => {
          //   // 在这里使用setTimeout 是因为DOM 未完全加载好，会导致scrollheight 高度问题
          //   setTimeout(() => {
          //     this.scroll = new BScroll(this.$refs.wrapper,{
          //       // 让div 等其他标签能够触发点击事件
          //       // 不添加则BScroll 对象里面除button 标签以外都不能触发click 事件
          //       click: true,
          //       // probeType 是否监听滚动的position 值
          //       // 默认0 不监听 1 手动不监听 2 监听滚动但不监听回滚的position 值 3 全部监听
          //       probeType: this.probeType,
          //       // 监听上拉事件
          //       pullUpLoad: this.pullUpLoad
          //     })
          //     // 监听scroll 对象的scroll 事件
          //     // 这里监听scroll 的position 值
          //     this.scroll.on('scroll',(position) => {
          //       // console.log(position);
          //       //$emit 将这里的值通过事件传递过去
          //       this.$emit('scroll',position)
          //     })
          //
          //     // 监听上拉事件
          //     this.scroll.on('pullingUp',() => {
          //       this.$emit('pullingUp')
          //     })
          //     // console.log(this.scroll)
          //
          //     // this.scroll.refresh() 解决图片加载慢导致better-scroll 的高度bug
          //
          //   },100)
          // })
        }
    }

</script>

<style scoped>

</style>
