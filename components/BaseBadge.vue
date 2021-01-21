<template>
  <div :class="$style.badge">
    <slot></slot>
    <div v-show="value" :class="$style['badge__content']" :style="styles">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number || String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    styles() {
      return {
        background: this.color,
      }
    },
  },
}
</script>

<style lang="scss" module>
.badge {
  pointer-events: auto;
  position: relative;
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;

    /* position */
    position: absolute;
    top: -20%;
    right: -20%;
    // right: 50%;

    /* font */
    font-size: 8px;
    font-weight: bold;
    color: white;

    border-radius: 10px;
    height: 12px;
    letter-spacing: 0;
    min-width: 12px;
    pointer-events: auto;
    text-align: center;
    text-indent: 0;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    white-space: nowrap;
  }
}
</style>
