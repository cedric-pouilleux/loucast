<template>
  <div class="contact-form">
    <form>
      <div class="flex">
        <label>
          Your contact
          <input v-model="v$.name.$model" type="text" placeholder="Name and lastname" :class="{ error: v$.name.$error}">
          <div v-if="v$.name.$error" class="error">
            <Icon class="error-icon" name="mdi:alert-circle-outline" size="16px" />
            {{ v$.name.$errors[0].$message }}
          </div>
        </label>
        <label>
          Your phone number <span class="optional">optional</span>
          <input v-model="v$.phone.$model" type="text" placeholder="Your phone number" :class="{ error: v$.name.$error}">
          <div v-if="v$.phone.$error" class="error">
            <Icon class="error-icon" name="mdi:alert-circle-outline" size="16px" />
            {{ v$.name.phone[0].$message }}
          </div>
        </label>
      </div>

      <label class="contact-type">
        Contact type
        <select v-model="v$.type.$model">
          <option value="message">Simple message</option>
          <option value="booking">Booking</option>
        </select>
      </label>

      <div class="flex">
        <label>
          Booking date
          <Datepicker v-model="v$.date.$model" placeholder="Select date" :enable-time-picker="false" />
        </label>
        <label>
          Booking time range
          <Datepicker v-model="v$.timeRange.$model" time-picker range placeholder="Select the time range" />
        </label>
      </div>

      <label>
        Message title
        <input v-model="v$.title.$model" type="text" placeholder="Your message title">
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
import Datepicker from '@vuepic/vue-datepicker'

const state = reactive({
  name: '',
  title: '',
  message: '',
  phone: '',
  type: 'booking',
  timeRange: '',
  date: ''
})

const rules = computed(() => ({
  name: {
    required
  },
  title: {
  },
  phone: {
  },
  message: {
    required
  },
  type: {
    required
  },
  timeRange: {
  },
  date: {

  }
}))

const v$ = useVuelidate(rules, state)

</script>

<style scoped lang="scss">
.contact-form {
  min-width: 500px;
  max-width: 500px;

  .contact-type {
    background-color: #eee;
    padding: 16px 14px 4px 14px;
    margin-bottom: 16px;
  }

  .flex {
    display: flex;
    column-gap: 20px;
  }

  .optional {
    font-size: .8em;
    color: #aaa;
    font-style: italic;
  }

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
    color: #333;
    font-size: .8em;
    width: 100%;

    textarea {
      min-height: 100px;
    }
  }
}
</style>
