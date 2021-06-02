<template>
  <div id="tarbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TarBar"
  }
</script>

<style scoped>
  #tarbar {
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 1px -1px 1px rgba(100,100,100,0.2);
  }


</style>
