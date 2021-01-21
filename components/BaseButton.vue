<template>
  <button class="base-button" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  computed: {},
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables.scss';

/* Buttons styles start */
.base-button {
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: $black;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 8px;
  width: 100%;
}

.base-button:hover,
.base-button:focus {
  background: $grey;
}

.base-button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

.base-button:active {
  transform: scale(0.99);
}
/* Button styles end */
</style>
