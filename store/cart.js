export const state = () => ({
  cart: [],
  success: false,
})

export const mutations = {
  SET_SUCCESS(state, payload) {
    state.success = payload
  },
  ADD(state, payload) {
    state.cart = [...state.cart, payload]
  },
  REMOVE(state, id) {
    state.cart = state.cart.filter((product) => +product.id !== +id)
  },
  SET_CART(state, payload) {
    state.cart = payload
  },
}

export const getters = {
  total: (state) => state.cart.length,
}
