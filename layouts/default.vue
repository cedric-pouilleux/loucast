<template>
  <div class="loucast-app">
    <header class="header">
      <h1>LØUCAST</h1>
      <nav>
        <NuxtLink to="/">
          About
        </NuxtLink>
        <NuxtLink to="/contact">
          Contact
        </NuxtLink>
      </nav>
    </header>
    <slot />
  </div>
</template>

<style scoped lang="scss">
header.header {
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
    a {
      color: #333;
      text-decoration: none;
      font-weight: 700;
      margin: 0 16px;
    }
  }
}
</style>
