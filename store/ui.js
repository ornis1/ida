export const state = () => ({
  overlay: false,
})

export const mutations = {
  SET_OVERLAY(state, payload = true) {
    state.overlay = payload
  },
}
