<template>
  <div class="contact-form panel grey-2">
    <h2>Contact</h2>
    <form class="panel__content" @submit.prevent="handleSubmitForm">
      <div class="form__row-field">
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
          <input v-model="v$.phone.$model" type="text" placeholder="Your phone number" :class="{ error: v$.phone.$error}">
          <div v-if="v$.phone.$error" class="error">
            <Icon class="error-icon" name="mdi:alert-circle-outline" size="16px" />
            {{ v$.phone.$errors[0].$message }}
          </div>
        </label>
      </div>

      <label class="contact-type">
        Contact type
        <select v-model="v$.type.$model" :class="{ error: v$.type.$error}" @change="handleTypeChange">
          <option value="" disabled selected>Seleect contact type</option>
          <option value="message">Simple message</option>
          <option value="booking">Booking</option>
        </select>
        <div v-if="v$.type.$error" class="error">
          <Icon class="error-icon" name="mdi:alert-circle-outline" size="16px" />
          {{ v$.type.$errors[0].$message }}
        </div>
      </label>

      <div v-if="isBooking" class="contact-booking form__row-field">
        <label>
          Booking date
          <Datepicker v-model="v$.date.$model" placeholder="Select date" :enable-time-picker="false" />
          <div v-if="v$.date.$error" class="error">
            <Icon class="error-icon" name="mdi:alert-circle-outline" size="16px" />
            {{ v$.date.$errors[0].$message }}
          </div>
        </label>
        <label>
          Booking time range
          <Datepicker v-model="v$.timeRange.$model" time-picker range placeholder="Select the time range" />
          <div v-if="v$.timeRange.$error" class="error">
            <Icon class="error-icon" name="mdi:alert-circle-outline" size="16px" />
            {{ v$.timeRange.$errors[0].$message }}
          </div>
        </label>
      </div>

      <label>
        Message title <span class="optional">optional</span>
        <input v-model="v$.title.$model" type="text" placeholder="Your message title">
      </label>

      <label>
        Message
        <textarea v-model="v$.message.$model" placeholder="Your message" :class="{ error: v$.message.$error}" />
        <div v-if="v$.message.$error" class="error">
          <Icon class="error-icon" name="mdi:alert-circle-outline" size="16px" />
          {{ v$.message.$errors[0].$message }}
        </div>
      </label>

      <button class="btn-primary" :class="{ 'btn-invalid': v$.$invalid}">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, requiredIf } from '@vuelidate/validators'
import Datepicker from '@vuepic/vue-datepicker'

const state = reactive({
  name: '',
  title: '',
  message: '',
  phone: '',
  type: '',
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
    requiredIfBooking: requiredIf(state.type === 'booking')
  },
  date: {
    requiredIfBooking: requiredIf(state.type === 'booking')
  }
}))

const v$ = useVuelidate(rules, state)

const isBooking = computed(() => state.type === 'booking')

async function handleSubmitForm () {
  v$.value.$touch()
  if (await v$.value.$validate()) {
    alert('send')
  }
}

function handleTypeChange () {
  v$.value.$reset()
}

</script>

<style scoped lang="scss">
.contact-form {

  flex: 2;
  min-width: 400px;
  max-width: 600px;

  &__inner {
    padding: 12px 30px;
  }

  .contact-booking {
    border-radius: 4px;
    padding: 16px 14px 4px 14px;
    border: 1px solid #ebebeb;
    margin-bottom: 16px;
  }

  .optional {
    font-size: .8em;
    color: #aaa;
    font-style: italic;
  }

  .error {
    color: #ff0000;
    display: flex;
    margin-bottom: 12px;
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

@media screen and (max-width: 780px){
  .contact-form {
    max-width: none;
  }
}
</style>
