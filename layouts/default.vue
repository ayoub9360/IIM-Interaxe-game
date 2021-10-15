<template>
  <main>
    <Nuxt class="content"/>
    <TheNav/>
  </main>
</template>

<style>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
*{
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: calc(100vh - 50px);
} 
</style>