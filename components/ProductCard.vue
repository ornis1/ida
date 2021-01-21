<template>
  <article class="card">
    <div class="card-content">
      <div class="card-icons">
        <div class="card__rating">
          <svgicon name="star" width="20"></svgicon>
          <span>{{ product.rating }}</span>
        </div>

        <svgicon
          name="cart"
          width="13"
          color="currentColor"
          class="pointer card__cart-icon"
          @click.native="$emit('addToCart', product)"
        ></svgicon>
      </div>
      <img :src="formatImgUrl(product.photo)" alt="" class="card__img" />
    </div>
    <div class="card-footer">
      <h3 class="card__title">{{ product.name }}</h3>
      <span class="card__price">{{ formatPrice(product.price) }}</span>
    </div>
  </article>
</template>

<script>
/*
{ Product options
  "id": number,
  "name": string,
  "price": number,
  "rating": number,
  "photo": string,
  "category": number
},
*/
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

<style lang="scss">
@import '~assets/css/variables.scss';

.card {
  padding: 16px;
  &-content {
    display: flex;
    position: relative;
  }
  &-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  &__rating {
    display: flex;
    align-items: center;
    color: $yellow;
    font-size: 10px;
    line-height: 13px;
    font-weight: bold;
  }
  &__cart-icon {
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
    margin: 0 auto 16px;
  }

  &-footer {
    font-size: 14px;
    line-height: 18px;
  }

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
