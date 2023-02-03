<template>
  <div class="contact-infos panel grey-3">
    <h2>Informations</h2>
    <div class="panel__content">
      <ul class="nav-list">
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

  .panel__content {
    width: 325px;
  }

  ul {
    li {
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

@media screen and (max-width: 780px){
  .contact-infos {

    .panel__content {
      width: auto;
    }
  }

}
</style>
