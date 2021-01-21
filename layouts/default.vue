<template>
  <div>
    <AppNavbar />
    <app-sidebar v-model="sidebar" />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import noScroll from '@/mixin/noScrollMixin'
import overlay from '@/mixin/overlay'
import AppSidebar from '../components/AppSidebar.vue'

export default {
  components: { AppSidebar },
  mixins: [overlay, noScroll],
  computed: {
    ...mapState('ui', ['sidebar']),
  },
}
</script>
