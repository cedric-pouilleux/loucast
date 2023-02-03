<template>
  <NuxtLayout>
    <div class="contact-page">
      <section class="contact-page__wrapper">
        <contact-form />
        <contact-informations />
        <div class="gfx">
          <div class="gfx__header" />
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.contact-page {
  &__wrapper {
    display: flex;
    font-family: 'Space Grotesk', sans-serif;
  }
  .gfx {
    background-color: #ebebeb;
    height: calc(100vh - var(--header-height));
    display: block;
    width: 100%;
    &__header {
      height: 46px;
      background-color: #777;
    }
  }
}
</style>
