<template>
  <div id="main" class="main" @click="focus">
    <p>Last login: Wed Oct 13 09:56:44 on ttys000</p>
    <p v-for="(item, index) in terminal" :key="index" class="line">
      <span>→</span> 
      <span class="tilt">~</span>
      /User/Desktop/ > {{ item.command }} 
      <br> {{ item.response }}
    </p>

    <p class="line">
      <span>→</span> 
      <span class="tilt">~</span>
      /User/Desktop/ 
      <input v-model="command" autofocus type="text" class="input" @keydown.enter="runCommand">
    </p>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      command: '',
      terminal: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.line')[0].scrollTop = 0;
    })    
  },
  methods: {
    focus() {
      document.querySelector('.input').focus()
    },
    runCommand() {
      let response

      if (this.command.toLowerCase() === 'unblur image') {
        response = "L'image a bien été corigé !"
        const data = {
          isVisible: true,
        }
        const params = { id: 'image', newItem: data }
        this.$store.commit('setClue', params)
      } 
      else if (this.command.toLowerCase().includes('login')) {
        if (this.command.toLowerCase().includes('login blood')) {
          response = "Connexion à l'utilisateur blood en cours..."
          const data = {
            isOpen: true,
            isVisible: true,
            page: 'login'
          }
          const params = { id: 'internet', newItem: data }
          this.$store.commit('setContent', params)
        } else {
          response = "Utilisateur inconnu, veuillez réessayer."
        }
      } 
      else if (this.command.toLowerCase() === 'clear') {
        this.terminal.length = 0
      }
      else {
        response = "Cette commande est inconnue."
      }

      const params = {
        command: this.command,
        response
      }
      this.terminal.push(params)
      this.command = ''
      window.scrollTo(0,document.querySelectorAll('.line')[0].scrollHeight);
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
  border-radius: 0 0 8px 8px;
  background: black;
  color: white;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 10px;
  p {
    font-size: 14px;
    span {
      color: rgb(23, 160, 23);
    }
    .tilt {
      color: rgb(38, 207, 236);
    }
    input {
      width: calc(100% - 160px);
      background: black;
      border: none;
      outline: none;
      color: white;
    }
  }
}
</style>
