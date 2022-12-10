<template>
  <div>
    <waiting-page />
    <div class="auth" data-netlify-identity-button />
    <div id="netlify-modal" ref="modal" />
  </div>
</template>

<script setup lang="ts">
import netlifyIdentity from 'netlify-identity-widget'
import { onMounted } from 'vue'
import WaitingPage from '~/components/landing-pages/WaitingPage.vue'

onMounted(() => {
  netlifyIdentity.init({
    container: '#netlify-modal',
    locale: 'fr'
  })
})

useHead({
  title: 'Løucast - Welcome'
})
</script>

<style lang="scss">
.auth {
  position: absolute;
  padding: 10px;
  right: 0;
  top: 0;
  a.netlify-identity-button {
    text-decoration: none;
    color: #333;
  }
}
</style>
