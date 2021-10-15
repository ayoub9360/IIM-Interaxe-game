<template>
  <main>
    <video class="bg-video" autoplay loop>
      <source src="~/assets/victoire.mp4" type="video/mp4">
    </video>
    <nuxt-link to="/"><h1>REJOUER</h1></nuxt-link>
    <!-- <video class="bg-video" autoplay loop>
      <source src="~/assets/defaite.mp4" type="video/mp4">
    </video> -->
  </main>
</template>

<script>
export default {
  layout: 'sans'
}
</script>

<style lang="scss" scoped>
main {
  width: 100vh; 
  height:100vw; 
  overflow:hidden;
}
video {
  position: absolute;
  top: 50%; 
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%; 
  min-height: 100%; 
  width: auto; 
  height: auto;
  z-index: -1000; 
  overflow: hidden;
}
h1 {
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  bottom: 10%;
  left: 50%;
  background: white;
  padding: 5px 10px;
  border-radius: 8px;
}
a {
  text-decoration: none;
  color: rgb(48, 47, 47);
}
</style>