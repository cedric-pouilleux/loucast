<template>
  <div class="loucast-app">
    <header class="header">
      <h1>LØUCAST</h1>
      <nav>
        <NuxtLink to="/">
          About
        </NuxtLink>
        <NuxtLink to="/contact">
          Contact & Booking
        </NuxtLink>
      </nav>
    </header>
    <div class="body-wrapper">
      <div class="left" />
      <div class="body-wrapper__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.loucast-app {

  .body-wrapper {
    display: flex;
    .left {
      height: calc(100vh - var(--header-height));
      background-color: #333;
      min-width: 235px;
    }
    &__content {
      width: 100%;
    }
  }
}

header.header {
  box-sizing: border-box;
  height: var(--header-height);
  border-bottom: 1px solid #ccc;
  color: #fff;
  display: flex;
  align-items: center;

  h1 {
    color: #333;
    padding: 12px 18px;
    font-size: 46px;
    border-right: 1px solid #ccc;
  }

  nav {
    margin-left: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    a {
      color: #333;
      text-decoration: none;
      font-weight: 700;
      margin: 0 16px;
    }
  }
}
</style>
