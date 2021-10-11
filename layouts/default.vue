<template>
  <main>
    <Nuxt/>
    <div class="nav">
      <div class="home"></div>
    </div>
  </main>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.nav {
  background: blue;
  height: 80px;
  position: relative;
}

.home {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: green;
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>