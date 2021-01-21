<template>
  <base-sidebar v-model="sidebar" class="sidebar">
    <cart />
  </base-sidebar>
</template>

<script>
import { mapState } from 'vuex'
import BaseSidebar from './BaseSidebar.vue'
import Cart from './Cart.vue'

export default {
  components: {
    BaseSidebar,
    Cart,
  },
  computed: {
    ...mapState('ui', ['sidebar']),
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 16px;
}
</style>
