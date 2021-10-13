export const state = () => ({
  content: [
    {
      id: 'email',
      isVisible: false,
      isOpen: false,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/602px-Mail_%28iOS%29.svg.png',
    },
    {
      id: 'internet',
      isVisible: false,
      isOpen: false,
      logo: 'https://cdn.icon-icons.com/icons2/2552/PNG/512/safari_browser_logo_icon_152965.png',
      page: 'google.com',
      lastPage: 'home',
    },
    {
      id: 'terminal',
      isVisible: false,
      isOpen: false,
      logo: 'https://icon-library.com/images/command-prompt-icon/command-prompt-icon-11.jpg',
    },
    {
      id: 'note',
      isVisible: false,
      isOpen: false,
      logo: 'https://help.apple.com/assets/5FDCE7A064869015B86C4E71/5FDCE7A164869015B86C4E78/fr_FR/c34b1b0e87e731a83161d9bb21345afc.png',
      note: "Je n'ai toujours pas retrouver Damien... Je dois commencer à mener l'enquete ! \nje vais noter toutes mes trouvailles ici !",
    },
  ],
})

export const getters = {
  getContent(state) {
    return state.content
  },
}

export const mutations = {
  setContent(state, { id, newItem }) {
    const item = state.content.find((item) => item.id === id)
    Object.assign(item, newItem)
  },
}
