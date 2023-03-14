<script setup>
import { ref } from "vue";

import Link from "@atoms/Link/index.vue";

const home = ref([
  {
    label: "Booking",
    to: "/hotels",
  },
  {
    label: "About Us",
    to: "/about-us",
  },
]);

const help = ref([
  {
    label: "Get in Touch",
    to: "/contact",
  },
]);
</script>

<template>
  <section class="table">
    <article>
      <h3 class="table__title">Home</h3>
      <nav>
        <ul>
          <Link
            v-for="item in home"
            :key="item.label"
            :label="item.label"
            :to="item.to"
          />
        </ul>
      </nav>
    </article>

    <article>
      <h3 class="table__title">Help</h3>
      <nav>
        <ul>
          <Link
            v-for="item in help"
            :key="item.label"
            :label="item.label"
            :to="item.to"
          />
        </ul>
      </nav>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 6rem;

  &__title {
    @include h3;
    margin-bottom: 2.4rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
