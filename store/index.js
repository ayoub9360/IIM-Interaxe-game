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
    },
    {
      id: 'cmd',
      isVisible: false,
      isOpen: false,
      logo: 'https://icon-library.com/images/command-prompt-icon/command-prompt-icon-11.jpg',
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
