<template>
  <div class="table">
    <table>
      <tr>
        <td>NOM</td>
        <td>PRÉNOM</td>
        <td>HEURE DE COMMANDE</td>
        <td>REPAS</td>
        <td>TEMPS PASSÉ</td>
      </tr>
      <tr>
        <td>NICOLE</td>
        <td>THOMAS</td>
        <td>18H45</td>
        <td>Menu du chef</td>
        <td>45 min</td>
      </tr>
      <tr>
        <td>FOUYR</td>
        <td>DAMIEN</td>
        <td>18H30</td>
        <td>Pavé de saumon</td>
        <td>1H00</td>
      </tr>
      <tr>
        <td>VIGNET</td>
        <td>ELODIE</td>
        <td>18H30</td>
        <td>PIZZA</td>
        <td>40 min</td>
      </tr>
      <tr>
        <td>PARIS</td>
        <td>ARTHUR</td>
        <td>18H45</td>
        <td>Menu du chef</td>
        <td>50 min</td>
      </tr>
      <tr>
        <td>POULET</td>
        <td>PATRICIA</td>
        <td>18H30</td>
        <td>PIZZA</td>
        <td>40 min</td>
      </tr>
      <tr>
        <td>AIMET</td>
        <td>AMANDINE</td>
        <td>18H45</td>
        <td>Jardinière</td>
        <td>1H15</td>
      </tr>
      <tr>
        <td>VALLET</td>
        <td>PAUL</td>
        <td>18H55</td>
        <td>PIZZA</td>
        <td>40 min</td>
      </tr>
      <tr>
        <td>MARGI</td>
        <td>LEA</td>
        <td>18H30</td>
        <td>Pavé de saumon</td>
        <td>1H00</td>
      </tr>
      <tr>
        <td>HOTTE</td>
        <td>XAVIER</td>
        <td>19H00</td>
        <td>Soupe de poisson</td>
        <td>1H00</td>
      </tr>
      <tr>
        <td>ROSE</td>
        <td>MAELLE</td>
        <td>18H40</td>
        <td>Cote de boeuf</td>
        <td>1H00</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: scroll;
  tr{
    &:first-child {
      font-weight: bold;
    }
    &:nth-child(odd) {
      background: rgb(206, 206, 206);
    }
  }
}
</style>
