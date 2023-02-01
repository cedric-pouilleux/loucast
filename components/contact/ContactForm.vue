<template>
  <div class="contact-form">
    <h3>Message</h3>
    <form>
      <label>
        Your name *
        <input v-model="v$.name.$model" type="text" placeholder="Name and lastname" :class="{ error: v$.name.$error}">
        <div v-if="v$.name.$error" class="error">
          <Icon class="error-icon" name="mdi:alert-circle-outline" size="16px" />
          {{ v$.name.$errors[0].$message }}
        </div>
      </label>

      <label>
        Subject
        <input v-model="v$.title.$model" type="text" placeholder="Subject resume">
      </label>

      <label>
        Message *
        <textarea v-model="v$.message.$model" placeholder="Your message" />
        <div v-if="v$.message.$error" class="error">
          <Icon class="error-icon" name="mdi:alert-circle-outline" size="16px" />
          {{ v$.message.$errors[0].$message }}
        </div>
      </label>

      <button class="btn-primary" :disabled="!!v$.$errors.length">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const state = reactive({
  name: '',
  title: '',
  message: ''
})

const rules = computed(() => ({
  name: {
    required
  },
  title: {
  },
  message: {
    required
  }
}))

const v$ = useVuelidate(rules, state)

</script>

<style scoped lang="scss">
.contact-form {
  min-width: 500px;
  max-width: 500px;

  .error {
    color: #ff0000;
    font-size: .8em;
    display: flex;
    align-items: center;
    .error-icon {
      margin-right: 8px;
    }
  }

  form {
    margin-top: 20px;
  }

  label {
    display: block;
    color: #555;
    margin: 20px 0;
    display: block;

    textarea {
      min-height: 100px;
    }
  }
}
</style>
