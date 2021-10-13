<template>
  <div id="main" class="main">
    <textarea v-model="note" class="txt" @input="setNote"></textarea>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      note: ''
    }
  },
  mounted() {
    this.note = this.data.note
  },
  methods: {
    setNote() {
      const data = {
        note: this.note
      }
      const params = { id: this.data.id, newItem: data }
      this.$store.commit('setContent', params)
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
  border-radius: 0 0 8px 8px;
  background: white;
  color: black;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 10px;
  textarea {
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
  }
}
</style>
