<template>
  <div class="informations">
    <h3>Informations</h3>
    <ul>
      <li>
        <Icon
          class="list-icon"
          :size="iconSize"
          name="mdi:email"
        />contact@loucast.fr
      </li>
      <li>
        <Icon
          :size="iconSize"
          class="list-icon"
          name="entypo-social:instagram"
        /> Instagram
      </li>
      <li>
        <Icon
          :size="iconSize"
          class="list-icon"
          name="entypo-social:soundcloud"
        /> Soundcloud
      </li>
      <li>
        <Icon
          :size="iconSize"
          class="list-icon"
          name="entypo-social:facebook"
        /> Facebook
      </li>
      <li>
        <Icon
          :size="iconSize"
          class="list-icon"
          name="mdi:phone"
        />0712589563 <span class="schedule"> (9h - 18h)</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const iconSize = '12px'
</script>

<style scoped lang="scss">
.informations {
  ul {
    li {
      line-height: 40px;
      font-size: 1.3em;
      display: flex;
      color: #333;
      font-weight: 300;
      align-items: center;

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
