<template>
  <NuxtLayout>
    <div class="contact-page">
      <h2>Contact</h2>
      <section class="contact-page__wrapper">
        <contact-form />
        <contact-informations />
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.contact-page {
  h2 {
    font-size: 2em;
    color: #333;
    margin: 20px;
    text-align: center;
  }
  &__wrapper {
    display: flex;
    font-family: 'Space Grotesk', sans-serif;
    justify-content: space-evenly;

    > div {
      padding: 0 20px;
    }
  }
}
</style>
