<template>
  <titled-box title="Оформить заказ">
    <form class="form" @submit.prevent>
      <base-input
        v-for="inp in form"
        :key="inp.name"
        v-model="inp.value"
        v-mask="inp.name === 'phone' ? phoneMask : ''"
        :placeholder="inp.placeholder"
        required
      ></base-input>
      <base-button @click="submit"> Оформить </base-button>
    </form>
  </titled-box>
</template>

<script>
import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'
import TitledBox from './TitledBox.vue'

export default {
  components: { TitledBox, BaseButton, BaseInput },
  data() {
    return {
      model: '',
      phoneMask: [
        '+7',
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ],
      form: [
        {
          value: '',
          placeholder: 'Ваше имя',
        },
        {
          name: 'phone',
          value: '',
          placeholder: 'Телефон',
        },
        {
          value: '',
          placeholder: 'Адрес',
        },
      ],
    }
  },
  computed: {
    isValid() {
      return this.form.every((inp) => inp.value)
    },
  },
  methods: {
    clearForm() {
      this.form = this.form.map((inp) => ({ ...inp, value: '' }))
    },
    submit() {
      if (this.isValid) {
        this.$store.commit('cart/SET_SUCCESS', true)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  $rowGap: 16px;
  $btnMargin: 24px;

  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: $rowGap;

  & > :last-child {
    margin-top: calc(#{$btnMargin} - #{$rowGap});
  }
}
</style>
