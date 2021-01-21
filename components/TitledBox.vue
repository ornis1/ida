<template>
  <div class="box">
    <h2 class="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';
.box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & ~ & {
    margin-top: 36px;
  }
}
.title {
  margin-bottom: 16px;
  font-weight: normal;
  color: $grey;
}
</style>
