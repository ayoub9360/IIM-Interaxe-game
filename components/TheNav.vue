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
        <p> {{ item.id }} </p>
      </div>
    </div>
    <img v-if="!muted" style="height: 20px; margin-left: auto" src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/512/sound-icon.png" alt="sound" @click="sound">
    <img v-if="muted" style="height: 20px; margin-left: auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mute_Icon.svg/1200px-Mute_Icon.svg.png" alt="sound" @click="sound">
    
    <audio class="song" hidden="true" controls autoplay="true">
      <source src="/FBI.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      muted: false
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
    },
    sound() {
      const vid = document.querySelector(".song");
      vid.muted = !this.muted;
      this.muted = !this.muted;
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
        text-transform: capitalize;
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
