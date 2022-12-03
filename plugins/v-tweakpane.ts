import { VTweakpane } from 'v-tweakpane'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VTweakpane', VTweakpane)
})
