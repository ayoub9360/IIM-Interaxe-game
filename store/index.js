export const state = () => ({
  content: [
    {
      id: 'email',
      isVisible: false,
      isOpen: false,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/602px-Mail_%28iOS%29.svg.png',
      email: [
        {
          id: 'discover',
          from: 'The killer',
          object: "Je retiens ton ami en otage, ahahahahahah!!!!!!",
          content: "Télécharge le logiciel de reconnaissance vocale et décrypte l'image si tu souhaites essayer de retrouver Damien",
          avatarImage: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/CH/de/99/EP2402-CUSA05624_00-AV00000000000221/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720',
          image: '/flou.jpg',
          isVisible: true,
          isOpen: false,
          download: true,
        },
        {
          id: 'Damien',
          from: 'Damien FOUYR',
          object: "Il se passe des choses étranges ici...",
          content: "J'ai trouvé quelque chose d'étrange sur un site, mais l'image est flou. Je ne comprend pas",
          avatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKl8PFoYK2s9_5FEy5iUtdtMWmK-HwWpysc1P5jDWSCU3eTE646mVo1gfXSk8_yg_GBM&usqp=CAU',
          image: '/flou.jpg',
          isVisible: true,
          isOpen: true,
        },
      ],
    },
    {
      id: 'internet',
      isVisible: false,
      isOpen: false,
      logo: 'https://purepng.com/public/uploads/large/purepng.com-safari-iconsymbolsiconsapple-iosiosios-8-iconsios-8-7215225961106timx.png',
      page: 'home',
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
      note: "Je n'ai toujours pas retrouvé Damien... Je dois commencer à mener l'enquête ! \nje vais noter toutes mes trouvailles ici !",
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
  addMail(state, { newItem }){
    const item = state.content.find((item) => item.id === 'email')
    item.email.push(newItem)
  }
}
