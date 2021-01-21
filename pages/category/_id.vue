<template>
  <div class="container">
    <section>
      <header class="header">
        <h1>Каталог</h1>
      </header>
    </section>
    <section class="content">
      <categories :categories="categories" />
      <product-list :products="products" @addToCart="addToCartHandler" />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Categories from '../../components/Categories.vue'
import ProductList from '../../components/ProductList.vue'
export default {
  components: { ProductList, Categories },
  async asyncData({ store }) {
    await store.dispatch('catalog/loadCategories')
    await store.dispatch('catalog/loadProducts')
  },
  computed: {
    ...mapState('catalog', ['products', 'categories']),
  },
  watch: {
    '$route.params.id': {
      handler(v) {
        this.setCurrentCategory(v)
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions('catalog', ['setCurrentCategory']),
    ...mapMutations('cart', { addToCart: 'ADD' }),
    addToCartHandler(product) {
      this.addToCart(product)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  margin: 32px 0 24px;
}

.content {
  display: flex;
}
</style>
