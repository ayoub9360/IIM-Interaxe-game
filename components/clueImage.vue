<template>
  <div id="main" class="main">
    <img src="@/assets/images/user.jpg" alt="Username">
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
  border-radius: 0 0 8px 8px;
  background: black;
  color: white;
  overflow-y: scroll;
  img {
    max-height: 100%;
    width: auto;
    object-fit: contain;
  }
}
</style>
