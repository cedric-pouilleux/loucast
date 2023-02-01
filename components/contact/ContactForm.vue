<template>
  <div class="contact-form">
    <h3>Message</h3>
    <form>
      <label>
        Your name *
        <input type="text" placeholder="Name and lastname">
      </label>

      <label>
        Subject
        <input type="text" placeholder="Subject resume">
      </label>

      <label>
        Message *
        <textarea placeholder="Subject resume" />
      </label>

      <button class="btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  min-width: 500px;
  max-width: 500px;

  form {
    margin-top: 20px;
  }

  label {
    display: block;
    color: #555;
    textarea {
      min-height: 100px;
    }
    textarea, input {
      font-family: 'Space Grotesk', sans-serif;
      display: block;
      margin: 12px 0;
      border-radius: 0;
      padding: 10px;
      border: 1px solid #ccc;
      width: 100%;
    }
  }
}
</style>
