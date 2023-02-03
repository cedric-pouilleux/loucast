<template>
  <div class="loucast-app">
    <div class="left">
      <h1>LØUCAST</h1>
      <nav class="main-nav">
        <NuxtLink to="/">
          About
        </NuxtLink>
        <NuxtLink to="/contact">
          Contact & Booking
        </NuxtLink>
      </nav>
      <select class="select-nav" @change="handleNavChange">
        <option value="/">
          About
        </option>
        <option value="contact" selected>
          Contact & Booking
        </option>
      </select>
    </div>
    <div class="body-wrapper">
      <header class="header-baseline">
        Techno Paris
      </header>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()

function handleNavChange (event: Event) {
  router.push((event.target as HTMLSelectElement).value)
}
</script>

<style scoped lang="scss">
.loucast-app {
  display: flex;
  height: 100vh;

  .body-wrapper {
    width: 100%;
    .header-baseline {
      font-size: 1.2em,;
      font-weight: 300;
      padding-left: 12px;
      color: #fff;
      background-color: #333;
      line-height: 64px;
    }
  }

  .left {
    background-color: #333;
    .select-nav {
      display: none;
      background-color: #333;
      border-color: #555;
      color: #fff;
      margin-right:12px;
    }
    h1 {
      color: #fff;
      margin: 12px 24px;
      letter-spacing: 6px;
      font-size: 2.6em;
    }
  }
}

@media screen and (max-width: 780px){
  .loucast-app {
    flex-direction: column;
    .left {
      display: flex;
      .main-nav {
        display: none;
      }
      .select-nav {
        display: block;
      }
    }
    .body-wrapper {
      flex-direction: column;
      .header-baseline {
        padding: 0 24px 12px 24px;
        font-size: 1em;
        line-height: 0;
      }
    }
  }
}
</style>
