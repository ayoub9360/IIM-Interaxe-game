<template>
  <main>
    <div class="window">
      <div class="nav" :class="{note: data.id === 'note' ? true : false}">
        <p class="bar">{{ data.id }}</p>
        <div class="low" @click="hideWindow"></div>
        <div class="size"></div>
        <div class="close" @click="closeWindow"></div>
      </div>
      <PageEmail v-if="data.id === 'email'" :data="data"/>
      <PageInternet v-if="data.id === 'internet'" :data="data"/>
      <PageTerminal v-if="data.id === 'terminal'" :data="data"/>
      <PageNote v-if="data.id === 'note'" :data="data"/>
      
      <ClueImage v-if="data.id === 'image'" :data="data"/>
    </div>
  </main>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      app: ['email', 'internet', 'terminal', 'note']
    }
  },
  methods: {
    closeWindow() {
      const data = {
        isOpen: false,
        isVisible: false,
      }
      const params = { id: this.data.id, newItem: data }
      if (this.app.includes(this.data.id)) {
        this.$store.commit('setContent', params)
      }else {
        this.$store.commit('setClue', params)
      }
    },
    hideWindow() {
      const data = {
        isOpen: true,
        isVisible: false,
      }
      const params = { id: this.data.id, newItem: data }
      if (this.app.includes(this.data.id)) {
        this.$store.commit('setContent', params)
      }else {
        this.$store.commit('setClue', params)
      }
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
    &.note {
      background: #F8D558;
      .bar {
        color: #2e2e2e;
      }
    }
    .bar {
      text-transform: capitalize;
      color: white;
      margin: 0 auto 0 20px
    }
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
