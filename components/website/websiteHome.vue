<template>
  <div class="home">
    <div class="home-item" @click="navigate('google.com')">
      <img
        src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"
        alt="Google"
      />
      <p>Google</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    navigate(destination) {
      const element = document.getElementById('url');
      element.classList.add('animate')
      setTimeout(function(){
        element.classList.remove('animate');
      }, 2000)
      const data = {
        page: destination,
        lastPage: this.data.page,
      }
      const params = { id: this.data.id, newItem: data }
      this.$store.commit('setContent', params)
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-item {
    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      margin: auto;
    }
    margin: 0 10px;
    p {
      margin-top: 4px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
