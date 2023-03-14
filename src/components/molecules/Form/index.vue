<script setup>
import { ref } from "vue";
import Button from "@atoms/Button/index.vue";
import Label from "@atoms/Label/index.vue";
import Input from "@atoms/Input/index.vue";

const name = ref("");
const email = ref("");
const message = ref("");
</script>

<template>
  <form class="form">
    <fieldset class="form__fieldset">
      <Label text="Name" for="name" />
      <Input id="name" type="name"  placeholder="Your name" :value="name"/>
    </fieldset>

    <fieldset class="form__fieldset">
      <Label text="Email" for="email" />
      <Input id="email" type="email"  placeholder="Your email" :value="email"/>
    </fieldset>

    <fieldset class="form__fieldset">
      <Label text="Message" for="message" />
      <textarea
        id="message"
        type="message"
        placeholder="Your message to us"
        class="form__textarea"
        :value="message"
      />
    </fieldset>
  <Button label="Submit" isButton type="submit" />
  </form>
</template>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  &__fieldset {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__textarea {
    @include input;
    padding: 2rem;
  }
}
</style>
