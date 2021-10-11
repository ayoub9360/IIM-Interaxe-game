<template>
  <main>
    <div class="icon icon"></div>
    <div class="icon icon-1"></div>
    <div class="icon icon-2"></div>
    <div class="icon icon-3"></div>
    <div class="icon icon-4"></div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  main {
    height: calc(100vh - 80px);
    background: orange;
    position: relative;
  }
  .icon {
    height: 90px;
    width: 90px;
    border-radius: 12px;
    background: blue;
    position: absolute;
    top: 20px;
    left: 20px;
    &-1 {
      top: 130px;
      background: green;
    }
    &-2 {
      top: 240px;
      background: purple;
    }
    &-3 {
      top: 350px;
      background: yellow;
    }
    &-4 {
      top: 350px;
      background: greenyellow;
    }
  }
</style>
