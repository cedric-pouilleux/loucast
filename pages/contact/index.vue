<template>
  <NuxtLayout>
    <div class="contact-page">
      <section class="contact-page__wrapper">
        <contact-form class="contact" />
        <contact-informations class="infos" />
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

  .infos {
    flex: 2;
  }

  &__wrapper {
    display: flex;
    font-family: 'Space Grotesk', sans-serif;
  }
  .gfx {
    display: block;
    width: 100%;
    flex: 1;
    &__header {
      height: 40px;
      background-color: var(--color-grey-2);
    }
  }
}

@media screen and (max-width: 780px){
  .contact-page {
    &__wrapper {
      flex-direction: column;
    }
    .gfx { display: none }
  }
}
</style>
