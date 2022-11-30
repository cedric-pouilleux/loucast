<template>
  <div class="page">
    <div class="wrapper">
      <div>
        <h1>LOUCAST</h1>
        <p class="description">
          Coming soon !
        </p>
      </div>
      <div class="social">
        <a href="https://www.instagram.com/loucasscouille">
          <Icon
            size="30px"
            name="entypo-social:instagram"
          />
        </a>
        <a href="https://soundcloud.com/nothingbutthegroove">
          <Icon
            size="30px"
            name="entypo-social:soundcloud"
          />
        </a>
        <a href="https://soundcloud.com/nothingbutthegroove">
          <Icon
            size="30px"
            name="entypo-social:facebook"
          />
        </a>
        <a href="mailto:contact@loucast.fr">
          <Icon
            size="30px"
            name="mdi:email-variant"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}
.page {
  height: 100vh;
  width: 100vw;
  background: rgb(187,187,187);
  background: radial-gradient(circle, rgba(187,187,187,0) 0%, rgba(255,255,255,1) 100%);
}
.description {
  font-size: 1.6em;
  color: #555;
}
.wrapper {
  width: 400px;
  margin: auto;
  text-align: center;
  padding: 20px 40px;
  border-radius: 100px;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  div {
    margin-left: 20px;
  }

  .left {
    display: flex;
  }
}

h1 {
  letter-spacing: -6px;
  font-size: 4em;
  font-weight: 700;
  color: #333;
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
