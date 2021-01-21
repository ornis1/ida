<template>
  <aside v-show="value" class="base-sidebar">
    <div class="content">
      <slot></slot>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
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
@import '~assets/css/mixin';

.base-sidebar {
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;

  width: 100%;
  max-width: 460px;
  height: 100%;

  padding: 48px 52px;

  z-index: 2;

  @include panelBoxShadow();
}
.content {
  display: flex;
  align-items: stretch;
  width: 100%;
}
</style>
