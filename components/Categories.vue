<template>
  <ul :class="$style.list">
    <li v-for="ctg in categories" :key="ctg.id" :class="$style.item">
      <nuxt-link
        :to="{ name: 'category-id', params: { id: ctg.id } }"
        :active-class="$style.active"
        :class="$style['item__link']"
      >
        {{ ctg.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Categories',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" module>
@import '~assets/css/variables.scss';

.active {
  color: $black !important;
  text-decoration: underline !important;
}
.list {
  min-width: 140px;
  display: flex;
  flex-direction: column;
}

.item {
  line-height: 21px;
  margin-bottom: 16px;
  &__link {
    color: $grey-light;
    &:hover {
      color: $grey;
    }
  }
}
</style>
