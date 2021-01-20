import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('ui', ['overlay']),
  },
  watch: {
    overlay: {
      handler(val) {
        if (!process.browser) return
        if (val) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
      },
      immediate: true,
    },
  },
}
