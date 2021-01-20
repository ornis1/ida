import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('ui', ['sidebar']),
  },
  watch: {
    sidebar: {
      handler(val) {
        if (!process.browser) return
        if (val) {
          document.body.classList.add('overlay')
        } else {
          document.body.classList.remove('overlay')
        }
      },
      immediate: true,
    },
  },
}
