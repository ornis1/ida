<template>
  <div class="d-flex flex-col flex">
    <header class="header">
      <h1>Корзина</h1>
      <svgicon
        name="close"
        width="14"
        height="14"
        color="black"
        class="pointer"
        @click="TOGGLE_SIDEBAR"
      ></svgicon>
    </header>
    <cart-success-message v-if="success" />
    <empty-cart v-if="!cart.length && !success" />
    <div v-if="cart.length && !success">
      <cart-list :products="cart" @removeFromCart="handleRemoveFromCart" />
      <order-form />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import CartList from '@/components/CartList.vue'
import CartSuccessMessage from '@/components/CartSuccessMessage.vue'
import EmptyCart from '@/components/EmptyCart.vue'
import OrderForm from '@/components/OrderForm.vue'

export default {
  components: {
    EmptyCart,
    CartList,
    OrderForm,
    CartSuccessMessage,
  },
  computed: {
    ...mapState('cart', ['cart', 'success']),
  },
  methods: {
    ...mapMutations('ui', ['TOGGLE_SIDEBAR']),
    ...mapMutations('cart', { removeFromCart: 'REMOVE' }),
    handleRemoveFromCart(id) {
      this.removeFromCart(id)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.text {
  font-size: 22px;
  line-height: 28px;
}
</style>
