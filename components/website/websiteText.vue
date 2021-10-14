<template>
  <div class="text">
    <h1>Mes notes</h1>
    <div class="note">
      <h3>Note n°1</h3>
      <p>
        Je suis <span>sûr</span> d’être quelqu’un de froid mais
        <span>J’aime</span> la chaleur de corps à l’agonie. Elle
        <span>me</span> laisse un petit semblant de réconfort et de satisfaction
        mais j’ai besoin de plus… Hier soir, sur ma <span>terrasse</span>, je
        réfléchissais : “Comment pourrais-je trouver cette suffisance nécessaire
        à mon besoin non assouvi ?” <span>la</span> couleur de mon
        <span>café</span> devant moi, était aussi obscure que ma pensée. Des
        idées plus farfelues que les autres tournoyaient dans ma tête…
        <span>détendre</span> mon esprit, il le fallait ! <span>d’un</span> seul
        coup, mon vide n’était plus. Je savais ce que je devais faire et rien ni
        personne ne pouvait m’en empêcher !
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.text {
  height: 100%;
  box-sizing: border-box;
  padding: 20px 100px;
  overflow: scroll;
  .note {
    margin-top: 30px;
    span {
      font-weight: bold;
    }
  }
}
</style>