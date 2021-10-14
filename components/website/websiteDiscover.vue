<template>
  <div class="portrait">
    <img src="~/assets/images/EC_PARIS_ARTHUR.png">
    <img src="~/assets/images/EC_ROSE_MAELLE.png">
    <img src="~/assets/images/EC_VALET_PAUL.png">
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.portrait {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 20px;
  img {
    width: 30%;
    height: 100%;
    border-radius: 8px;
  }
}
</style>
