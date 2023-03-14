<script setup>
import Link from "@atoms/Link/index.vue";
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Our Hotels",
    to: "/hotels",
  },
  {
    label: "About Us",
    to: "/about-us",
  },
  {
    label: "Contact",
    to: "/contact",
  },
]);
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <Link
        v-for="item in items"
        :key="item.label"
        :label="item.label"
        :to="item.to"
      />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  &__list {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
}
</style>
