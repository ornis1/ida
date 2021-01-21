<template>
  <div class="success-message">
    <svgicon name="ok-hand" width="80" height="80"></svgicon>
    <h3 class="header">Заявка успешно отправлена</h3>
    <p class="text">Вскоре наш менеджер свяжется с Вами</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables.scss';

.success-message {
  display: grid;
  grid-auto-rows: min-content;
  place-items: center;
  margin: auto;
}
.header {
  margin-top: 24px;
  margin-bottom: 2px;
  font-size: 24px;
}
.text {
  color: $grey;
  line-height: 24px;
}
</style>
