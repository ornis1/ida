<template>
  <article class="card">
    <div class="card-content">
      <img :src="formatImgUrl(product.photo)" alt="" class="card__img" />
    </div>
    <div class="card-footer">
      <h3 class="card__title">{{ product.name }}</h3>
      <span class="card__price">{{ formatPrice(product.price) }}</span>
      <div class="card__rating">
        <svgicon name="star" width="20"></svgicon>
        <span>{{ product.rating }}</span>
      </div>
    </div>
    <div class="card-actions">
      <svgicon
        name="trash"
        width="20"
        height="22"
        color="currentColor"
        class="pointer card__icon"
        @click.native="$emit('removeFromCart', product.id)"
      ></svgicon>
    </div>
  </article>
</template>

<script>
import { formatImgUrl, formatPrice } from '@/helpers'
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    formatImgUrl,
    formatPrice,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables.scss';

.card {
  padding: 12px 22px 12px 25px;
  display: grid;
  grid-template-columns: 90px 1fr 22px;
  grid-column-gap: 34px 22px;
  align-items: center;
  // &-content {
  //   display: flex;
  //   position: relative;
  // }
  // &-icons {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  &__rating {
    display: flex;
    align-items: center;
    color: $yellow;
    font-size: 10px;
    line-height: 13px;
    font-weight: bold;
    margin-top: 16px;
  }
  &__icon {
    color: $grey-light;
    transition: 300ms;
    &:hover,
    &:focus,
    &:active {
      color: $black;
    }
  }

  &__img {
    // margin-bottom: 16px;
    margin: auto;
  }

  // &-footer {
  //   font-size: 14px;
  //   line-height: 18px;
  // }

  &__title {
    color: $grey;
    margin-bottom: 6px;
  }
  &__price {
    color: $black;
    font-weight: bold;
  }
}
</style>
