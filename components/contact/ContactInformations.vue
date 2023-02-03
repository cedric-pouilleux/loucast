<template>
  <div class="contact-infos">
    <h2>Informations</h2>
    <div class="contact-infos__inner">
      <ul>
        <li>
          <a href="mailto:contact@loucast.fr">
            <Icon
              class="list-icon"
              :size="iconSize"
              name="mdi:email"
            />contact@loucast.fr
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/loucasscouille">
            <Icon
              :size="iconSize"
              class="list-icon"
              name="entypo-social:instagram"
            /> Instagram
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/nothingbutthegroove">
            <Icon
              :size="iconSize"
              class="list-icon"
              name="entypo-social:soundcloud"
            /> Soundcloud
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/nothingbutthegroove">
            <Icon
              :size="iconSize"
              class="list-icon"
              name="entypo-social:facebook"
            /> Facebook</a>
        </li>
        <li>
          <a href="#phone">
            <Icon
              :size="iconSize"
              class="list-icon"
              name="mdi:phone"
            />0712589563 <span class="schedule"> (9h - 18h)</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const iconSize = '12px'
</script>

<style scoped lang="scss">
.contact-infos {

  &__inner {
    padding: 12px 30px;
    width: 325px;
  }

  h2 {
    font-size: 1.4em;
    font-weight: 300;
    padding: 12px;
    color: #fff;
    background-color: #666;
  }

  ul {
    li {
      border-bottom: 1px solid #ebebeb;
      line-height: 40px;
      font-size: 1em;
      color: #333;
      font-weight: 300;
      align-items: center;

      a {
        color: #333;
        padding-left: 6px;
        text-decoration: none;
        display: block;
      }

      a:hover {
        font-weight: 700;
      }

      .schedule {
        font-size: .7em;
        margin: 0 12px;
        color: #555555;
      }

      .list-icon {
        margin-right: 10px;
      }
    }
  }
}
</style>
