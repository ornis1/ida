<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @addToCart="$emit('addToCart', $event)"
    />
  </div>
</template>

<script>
export default {
  components: {
    ProductCard: () => import('@/components/ProductCard'),
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  flex: 1;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  @media screen and (max-width: 400px) {
    /* Делаем минимальный размер еще меньше для мобилок с viewport 320px */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
