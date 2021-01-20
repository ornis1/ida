import { fetchProduct, fetchProductCategory } from '@/api/product'
import ApiError from '@/errors/api'

export const state = () => ({
  products: [],
  categories: [],
  currentCategory: 1,
})

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_CURRENT_CATEGORY(state, payload) {
    state.currentCategory = payload
  },
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
}

export const actions = {
  async loadProducts({ commit, state, $router }) {
    try {
      const { data } = await fetchProduct(state.currentCategory)
      commit('SET_PRODUCTS', data)
    } catch (error) {
      /*
      this.app.context.redirect({ name: 'category-id', params: { id: 2 } })
       */
      /*  */
      return Promise.reject(new ApiError(error))
    }
  },

  async loadCategories({ commit }) {
    try {
      const { data } = await fetchProductCategory()
      commit('SET_CATEGORIES', data)
    } catch (error) {
      return Promise.reject(new ApiError(error))
    }
  },

  setCurrentCategory({ commit }, categoryId) {
    commit('SET_CURRENT_CATEGORY', categoryId)
  },
}
