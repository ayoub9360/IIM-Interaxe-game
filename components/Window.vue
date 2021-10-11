<template>
  <main>
    <div class="window">
      <div class="nav">
        <div class="low" @click="hideWindow"></div>
        <div class="size"></div>
        <div class="close" @click="closeWindow"></div>
      </div>
      <h1>{{ data.id }}</h1>
    </div>
  </main>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    closeWindow() {
      const data = {
        isOpen: false,
        isVisible: false,
      }
      const params = { id: this.data.id, newItem: data }
      this.$store.commit('setContent', params)
    },
    hideWindow() {
      const data = {
        isOpen: true,
        isVisible: false,
      }
      const params = { id: this.data.id, newItem: data }
      this.$store.commit('setContent', params)
    },
  },
}
</script>

<style lang="scss" scoped>
.window {
  height: 100%;
  width: 100%;
  background: #e2e2e2;
  border-radius: 8px;
  .nav {
    border-radius: 8px 8px 0 0;
    background: gray;
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .close {
      margin: 0 10px 0 0;
      background: red;
      height: 13px;
      width: 13px;
      border-radius: 8px;
      cursor: pointer;
      &::after {
        content: 'X';
        display: flex;
        justify-content: center;
        font-size: 10px;
        color: white;
      }
    }
    .size {
      margin: 0 10px 0 0;
      background: orange;
      height: 13px;
      width: 13px;
      border-radius: 8px;
      cursor: pointer;
      &::after {
        content: 'O';
        display: flex;
        justify-content: center;
        font-size: 10px;
        color: white;
      }
    }
    .low {
      margin: 0 10px 0 0;
      background: blue;
      height: 13px;
      width: 13px;
      border-radius: 8px;
      cursor: pointer;
      &::after {
        content: '_';
        display: flex;
        justify-content: center;
        font-size: 10px;
        color: white;
      }
    }
  }
}
</style>
