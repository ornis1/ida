export const state = () => ({
  cart: [],
})

export const mutations = {
  ADD(state, payload) {
    state.cart = [...state.cart, payload]
  },
  REMOVE(state, id) {
    state.cart = state.cart.filter((product) => +product.id !== +id)
  },
}

export const getters = {
  total: (state) => state.cart.length,
}
