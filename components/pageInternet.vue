<template>
  <div class="maain">
    <!-- Navigation -->
    <div class="naav">
      <div class="container">
        <div class="button">
          <p @click="navigate(data.lastPage)">←</p>
          <p>→</p>
          <img
            src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
            alt="Home"
            @click="navigate('home')"
          />
        </div>
        <div id="url" class="url">
          <p v-if="data.page === 'home'" class="homeText">{{ data.page }}</p>
          <p v-else>{{ data.page }}</p>
        </div>
        <img
          src="https://icones.pro/wp-content/uploads/2021/03/icone-de-configuration-noire.png"
          alt="Home"
          class="setting"
        />
      </div>
    </div>

    <WebsiteHome v-if="data.page === 'home'" :data="data" />
    <WebsiteLogin v-if="data.page === 'login'" :data="data" />
    <WebsiteGoogle v-if="data.page === 'google.com'" :data="data" />
    <WebsiteText v-if="data.page === 'accueil'" :data="data" />
    <WebsiteMap v-if="data.page === 'map'" :data="data" />
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      animate: true,
    }
  },
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
.maain {
  height: calc(100% - 20px);
  width: 100%;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  .naav {
    height: 50px;
    background: #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
      width: 80%;
      display: flex;
      align-items: center;
      padding: 10px 0;
    }
    .button {
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        background: #a8a8a8;
        border-radius: 50%;
        padding: 5px;
        margin-right: 10px;
        &:first-child {
          cursor: pointer;
        }
      }
      img {
        height: 17px;
        cursor: pointer;
      }
    }
    .url {
      background: white;
      padding: 5px 10px;
      width: 500px;
      border-radius: 8px;
      .homeText {
        text-transform: capitalize;
      }
    }
    .animate {
      position: relative;
      overflow: hidden;
      z-index: 1;
      &::after {
        content: ' ';
        height: 100%;
        width: 100%;
        position: absolute;
        left: 100%;
        top: 0;
        z-index: -1;
        background: rgb(116, 116, 224);
        animation: slide 2s linear 1;
      }
    }
    .setting {
      height: 30px;
      margin-left: auto;
      cursor: pointer;
    }
  }
}

@keyframes slide {
  from {
    width: 0;
    left: 0%;
  }
  1% {
    left: 0%;
  }
  20% {
    width: 20%;
  }
  40% {
    width: 30%;
  }
  60% {
    width: 30%;
  }
  70% {
    width: 50%;
  }
  90% {
    width: 50%;
  }
  99% {
    left: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
