<template>
  <div class="home">
    <div class="home-item" @click="navigate('google.com')">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
        alt="Google"
      />
      <p>Google</p>
    </div>
    <div class="home-item" @click="navigate('google.com')">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
        alt="Google"
      />
      <p>Admin</p>
    </div>
    <div class="home-item" @click="navigate('google.com')">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
        alt="Google"
      />
      <p>Journal</p>
    </div>
    <div class="home-item" @click="navigate('google.com')">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
        alt="Google"
      />
      <p>Google</p>
    </div>
    <div class="home-item" @click="navigate('google.com')">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
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
      height: 40px;
      padding: 20px;
      border-radius: 50%;
      background: rgb(255, 255, 255);
      cursor: pointer;
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
