<script setup>
const facilities = defineProps({
  label: String,
  icon: String,
});
</script>

<template>
  <li class="item">
    <button class="item">
      <svg width="40" height="40" viewBox="0 0 56 56">
        <use :href="icon" :xlinkHref="icon" />
      </svg>
      <p class="item__label">{{ label }}</p>
    </button>
  </li>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid var(--borderWhite);
  background-color: transparent;
  border-radius: 0.8rem;
  width: 15.3rem;
  height: 15.3rem;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    width: 18rem;
    height: 18rem;
  }

  &__label {
    @include default-text;
    text-align: center;
  }

  &:hover {
    box-shadow: 0rem 0rem 1rem var(--borderBlack);
  }
}
</style>
