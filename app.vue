<template>
  <div class="page">
    <div class="wrapper">
      <div>
        <h1>LØUCAST</h1>
        <p class="description">
          Coming soon !
        </p>
      </div>
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
</template>

<style scoped lang="scss">
.page {
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
