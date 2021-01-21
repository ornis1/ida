<template>
  <titled-box title="Товары в корзине">
    <cart-product
      v-for="product in products"
      :key="product.id"
      :product="product"
      @removeFromCart="$emit('removeFromCart', $event)"
    />
  </titled-box>
</template>

<script>
import CartProduct from './CartProduct.vue'
import TitledBox from './TitledBox.vue'
export default {
  components: { CartProduct, TitledBox },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
