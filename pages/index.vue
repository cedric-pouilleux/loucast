<template>
  <div>
    <waiting-page />
    <div class="auth" data-netlify-identity-button />
  </div>
</template>

<script setup lang="ts">
import WaitingPage from '~/components/landing-pages/WaitingPage.vue'

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
