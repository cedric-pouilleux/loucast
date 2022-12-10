<template>
  <div class="body">
    <div class="landing-page">
      <div class="wrapper">
        <header>
          <h1>LØUCAST</h1>
          <p class="description">
            Coming soon !
          </p>
        </header>
        <div class="social">
          <a href="https://www.instagram.com/loucasscouille">
            <Icon
              size="20px"
              name="entypo-social:instagram"
            />
          </a>
          <a href="https://soundcloud.com/nothingbutthegroove">
            <Icon
              size="20px"
              name="entypo-social:soundcloud"
            />
          </a>
          <a href="https://soundcloud.com/nothingbutthegroove">
            <Icon
              size="20px"
              name="entypo-social:facebook"
            />
          </a>
          <a href="mailto:contact@loucast.fr">
            <Icon
              size="20px"
              name="mdi:email-variant"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.body {
  background-color: #ffffff;
  opacity: 1;
  background-image:  linear-gradient(30deg, #e0e0e0 12%, transparent 12.5%, transparent 87%, #e0e0e0 87.5%, #e0e0e0), linear-gradient(150deg, #e0e0e0 12%, transparent 12.5%, transparent 87%, #e0e0e0 87.5%, #e0e0e0), linear-gradient(30deg, #e0e0e0 12%, transparent 12.5%, transparent 87%, #e0e0e0 87.5%, #e0e0e0), linear-gradient(150deg, #e0e0e0 12%, transparent 12.5%, transparent 87%, #e0e0e0 87.5%, #e0e0e0), linear-gradient(60deg, #e0e0e077 25%, transparent 25.5%, transparent 75%, #e0e0e077 75%, #e0e0e077), linear-gradient(60deg, #e0e0e077 25%, transparent 25.5%, transparent 75%, #e0e0e077 75%, #e0e0e077);
  background-size: 22px 39px;
  background-position: 0 0, 0 0, 11px 19px, 11px 19px, 0 0, 11px 19px;
}
.landing-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: rgb(187,187,187);
  background: radial-gradient(circle, rgba(187,187,187,0) 0%, rgba(255,255,255,1) 100%);
}
.description {
  font-size: 1.6em;
  color: #555;
}
.wrapper {
  margin: auto;
  text-align: center;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.social {
  margin-top: 40px;
  a {
    display: inline-block;
    padding: 10px;
    margin: 10px;
    color: #333;
    background-color: #fff;
  }
}
</style>
