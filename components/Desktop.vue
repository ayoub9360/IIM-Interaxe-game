<template>
  <main>
    <div class="icon-list">
      <div v-for="(item, index) in data" :key="item.id" class="icon" :class="`icon-${index}`" @click="openWindow(item.id)">
        <img :src="item.logo" :alt="item.id">
      </div>
    </div>
    
    <Window v-if="data[0].isVisible" :data="data[0]" class="window"/>
    <Window v-if="data[1].isVisible" :data="data[1]" class="window"/>
    <Window v-if="data[2].isVisible" :data="data[2]" class="window"/>
  </main>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getters.getContent
    }
  },
  methods: {
    openWindow(itemId){
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
  main {
    height: 100%;
    background-color: #1b1d1d;
    background-image: linear-gradient(to right bottom, #9f4b7b, #934a84, #844b8d, #714d94, #594f9a, #4a5fab, #346fb9, #007ec5, #009eda, #00bee8, #00ddef, #5ffbf1);
    position: relative;
    .icon-list {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      padding: 20px;
    }
    .icon {
      margin: 10px;
      height: 70px;
      width: 70px;
      border-radius: 12px;
      top: 20px;
      left: 20px;
      cursor: pointer;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .window {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
    }
  }
</style>