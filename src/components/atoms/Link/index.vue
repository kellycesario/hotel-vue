<script setup>
const listItem = defineProps({
  label: String,
  to: String,
});
</script>

<template>
  <li class="item">
    <RouterLink :to="to" class="item__link">{{ label }}</RouterLink>
  </li>
</template>

<style lang="scss" scoped>
.item {
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;

  &:hover {
    text-decoration: underline wavy var(--cyan) 0.2rem;
    transition: ease-in-out 0.1s;
  }

  &__link {
    &:focus {
      color: var(--green);
      font-weight: bolder;
      letter-spacing: 0.02rem;
    }
    
    &:active {
      color: var(--cyan);
      font-size: 1.7rem;
      text-decoration: underline wavy var(--cyan) 0.2rem;
      transition: ease-in-out 0.1s;
    }
  }
}
</style>
