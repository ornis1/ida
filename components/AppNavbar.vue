<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-inner">
        <h2 class="navbar__title">TestList</h2>
        <base-badge :color="variables.greyLight" :value="total">
          <svgicon
            :color="variables.black"
            width="24"
            height="26"
            name="cart"
            class="pointer"
            @click.native="TOGGLE_SIDEBAR"
          >
          </svgicon>
        </base-badge>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import variables from '~/assets/css/variables.scss'

export default {
  components: {
    BaseBadge: () => import('@/components/BaseBadge'),
  },
  data() {
    return {
      variables,
    }
  },
  computed: {
    ...mapGetters('cart', ['total']),
  },
  methods: {
    ...mapMutations('ui', ['TOGGLE_SIDEBAR']),
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables.scss';

.navbar {
  height: 66px;

  &-inner {
    padding: 20px 0;
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  &__title {
    font-size: 22px;
    line-height: 28px;
    color: $grey;
  }
}
</style>
