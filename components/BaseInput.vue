<template>
  <input v-model="model" class="base-input" v-bind="$attrs" />
</template>

<script>
export default {
  props: ['value'],
  computed: {
    model: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables.scss';

.base-input {
  background-color: $grey-extra-light;
  border-radius: 8px;
  padding: 14px;
  width: 100%;
  color: inherit;
  font-family: inherit;
  outline: none;
  border: none;
  line-height: 22px;
  &::placeholder {
    color: $grey-light;
  }
}
</style>
