import Vue from 'vue'
import VueMask, { VueMaskDirective } from 'v-mask'

// As a plugin
Vue.use(VueMask)

// Or as a directive
Vue.directive('mask', VueMaskDirective)
