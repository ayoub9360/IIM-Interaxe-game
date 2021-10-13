<template>
  <div class="main">
    <div class="nav">
      <div class="container">
        <div class="button">
          <p>←</p>
          <p>→</p>
          <img src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png" alt="Home">
        </div>
        <div class="url">
          <p>google.com</p>
        </div>
        <img src="https://icones.pro/wp-content/uploads/2021/03/icone-de-configuration-noire.png" alt="Home" class="setting">
      </div>
    </div>
    <iframe width="100%" height="100%" src="https://www.google.com/webhp?igu=1"></iframe>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss">
.main {
  height: 100%;
  width: 100%;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  .nav {
    height: 50px;
    background: #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
      width: 80%;
      display: flex;
      align-items: center;
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
      }
      img {
        height: 17px;
      }
    }
    .url {
      background: white;
      padding: 5px 10px;
      width: 500px;
      border-radius: 8px;
    }
    .setting {
      height: 30px;
      margin-left: auto;
    }
  }
  iframe {
    flex-grow: 1; 
    border: none; 
    margin: 0; 
    padding: 0;
    border-radius: 0 0 8px 8px;
  }
}
</style>