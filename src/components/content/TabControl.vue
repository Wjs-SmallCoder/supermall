<template>
    <div id="tab-control">
      <div id="tab-control-item" v-for="(item,index) in titles"
           :class="{active : index === currentIndex}"
           @click="itemclick(index)">
        <span>{{ item }}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
          titles: {
            type: Array,
            default() {
              return []
            }
          }
        },
      data() {
        return {
          currentIndex: 0
        }
      },
      methods: {
          itemclick(index) {
            this.currentIndex = index;
          }
      }
    }
</script>

<style scoped>
  #tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
    font-size: 15px;
  }

  #tab-control-item {
    flex: 1;
  }

  #tab-control-item span {
    padding: 6px 0;
  }

  .active span {
    color: #FC7EA4;
    border-bottom: 2px solid #FC7EA4;
  }
</style>
