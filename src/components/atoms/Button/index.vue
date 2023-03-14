<script setup>
const button = defineProps({
  label: String,
  isButton: {
    type: Boolean,
    default: false
  },
  to: String,
  type: String,
});
</script>

<template>
  <button class="button" :label="label" v-if="isButton" :type="type">
    {{ label }}
  </button>

  <a class="button" :label="label" v-else :href="to" target="_blank">
    {{ label }}
  </a>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 5.6rem;
  padding: 0 3.2rem;
  background-color: var(--green);
  border-radius: 3.5rem;
  border: none;
  gap: 1.2rem;
  @include button-label;
  cursor: pointer;

  &:hover {
    background-color: var(--cyan);
    transition: ease 0.3s;
  }
  &:active {
    background-color: var(--cyan);
    border: 0.2rem solid var(--black);
  }

  &:focus {
    background-color: var(--cyan);
    outline: 0.2rem solid var(--darkGray);
  }

  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
  }
}
</style>
