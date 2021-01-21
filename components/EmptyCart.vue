<template>
  <div class="d-flex flex flex-col">
    <p>Пока что вы ничего не добавили в корзину.</p>
    <base-button @click="redirect">Перейти к выбору</base-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BaseButton from './BaseButton.vue'

export default {
  components: {
    BaseButton,
  },
  methods: {
    ...mapMutations('ui', ['TOGGLE_SIDEBAR']),
    redirect() {
      this.TOGGLE_SIDEBAR()
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 24px;
}
</style>
