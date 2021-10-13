<template>
  <div class="nav">
    <div class="icon home">
      <img
        src="https://logos-marques.com/wp-content/uploads/2021/03/Apple-logo.png"
        alt="apple"
        @click="openMenu"
      />
    </div>

    <div
      v-for="item in data"
      :key="item.id"
      class="icon"
      @click="openWindow(item.id)"
    >
      <img v-if="item.isOpen" :src="item.logo" :alt="item.id" />
    </div>

    <div v-if="menu" class="menu">
      <div
        v-for="item in data"
        :key="item.id"
        class="menu-item"
        @click="openWindow(item.id)"
      >
        <img :src="item.logo" :alt="item.id" />
        <p>Test</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false
    }
  },
  computed: {
    data() {
      return this.$store.getters.getContent
    }
  },
  methods: {
    openMenu() {
      this.menu = !this.menu
    },
    openWindow(itemId){
      this.menu = false
      const data = {
        isOpen: true,
        isVisible: true,
      }
      const params = { id: itemId, newItem: data };
      this.$store.commit('setContent', params);
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  background: #d1d1d1;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  .menu {
    border-radius: 0 8px 0 0;
    height: 500px;
    width: 300px;
    background: white;
    position: absolute;
    top: -500px;
    left: 0px;
    &-item {
      padding: 10px;
      display: flex;
      align-items: center;
      p {
        padding: 0 10px;
      }
      &:first-child {
        border-radius: 0 8px 0 0;
      }
      &:hover {
        background: gray;
      }
      img {
        width: 50px;
      }
    }
  }
  .icon {
    cursor: pointer;
    margin-right: 10px;
    img {
      height: 35px;
    }
  }
  .home {
    display: flex;
    align-items: center;
    border-radius: 50%;
    margin-right: 30px;
    img {
      height: 30px;
    }
  }
}
</style>
