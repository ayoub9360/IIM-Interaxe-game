<template>
  <main>
    <div class="icon-list">
      <div v-for="(item, index) in data" :key="item.id" class="icon" :class="`icon-${index}`" @click="openWindow(item.id)">
        <img v-if="item.hide != true" :src="item.logo" :alt="item.id">
      </div>
    </div>
    
    <Window v-if="data[0].isVisible" :data="data[0]" class="window"/>
    <Window v-if="data[1].isVisible" :data="data[1]" class="window"/>
    <Window v-if="data[2].isVisible" :data="data[2]" class="window terminal"/>
    <Window v-if="data[3].isVisible" :data="data[3]" class="window"/>

    <Window v-if="clue[0].isVisible" :data="clue[0]" class="window image"/>
  </main>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getters.getContent
    },
    clue() {
      return this.$store.getters.getClue
    },
  },
  methods: {
    openWindow(itemId){
      const data = {
        isOpen: true,
        isVisible: true,
      }
      const params = { id: itemId, newItem: data };
      this.$store.commit('setContent', params);
    },
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
      height: 50px;
      width: 50px;
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
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
    }
    .terminal {
      top: 55%;
      left: 70%;
      width: 40%;
      height: 40%;
    }
    .image {
      top: 50%;
      left: 20%;
      width: max-content;
      height: 80%;
    }
  }
</style>