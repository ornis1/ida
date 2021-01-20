export const state = () => ({
  sidebar: false,
})

export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar = !state.sidebar
  },
}
