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
      logo: 'https://purepng.com/public/uploads/large/purepng.com-safari-iconsymbolsiconsapple-iosiosios-8-iconsios-8-7215225961106timx.png',
      page: 'map',
      lastPage: 'google.com',
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
  clue: [
    {
      id: 'image',
      isVisible: false,
      isFound: false,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/602px-Mail_%28iOS%29.svg.png',
    },
  ],
})

export const getters = {
  getContent(state) {
    return state.content
  },
  getClue(state) {
    return state.clue
  },
}

export const mutations = {
  setContent(state, { id, newItem }) {
    const item = state.content.find((item) => item.id === id)
    Object.assign(item, newItem)
  },
  setClue(state, { id, newItem }) {
    const item = state.clue.find((item) => item.id === id)
    Object.assign(item, newItem)
  },
}
