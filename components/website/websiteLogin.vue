<template>
  <div class="login">
    <h1>Hello <span>Blood</span>,</h1>
    <p>Veuillez entrer votre mot de passe.</p>
    <form @submit.prevent="checkPassword">
      <p class="error"> {{ error }} </p>
      <div>
        <input v-model="password" type="text" >
        <button type="submit">Se connecter</button>
      </div>
      <p class="letter">___  ___  ___  ___  ___ ___</p>
      <p class="indice">15 - 18 - 16 - 1 - 19 - 16</p>
    </form>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      password: '',
      error: ''
    }
  },
  methods: {
    checkPassword() {
      if (this.password === 'murder') {
        // Faire quelque chose
      } else {
        this.error = 'Mot de passe incorect !'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .login {
    background: rgb(24, 23, 23);
    border-radius: 0 0 8px 8px;
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      span {
        color: red;
      }
    }
    input {
      margin-top: 20px;
      background: transparent;
      border: none;
      padding: 10px 0 0 10px;
      outline: none;
      color: white;
      text-transform: uppercase;
      letter-spacing: 14px;
      font-size: 20px;
      width: 180px;
    }
    .error {
      color: red;
      text-align: center;
    }
    .letter {
      position: relative;
      top: -10px;
      pointer-events: none;
      margin-left: 3px;
    }
    .indice {
      margin-top: 8px;
      text-align: center;
    }
  }
</style>