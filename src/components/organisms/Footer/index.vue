<script setup>
import Accordion from "@molecules/Accordion/index.vue";
import Table from "@molecules/Table/index.vue";
import Copyright from "@molecules/Copyright/index.vue";
</script>

<template>
  <footer class="footer">
    <section class="footer--mobile">
      <Accordion />
    </section>
    <section class="footer--desktop">
      <Table/>
    </section>
    <section class="footer__copyright">
      <Copyright />
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: -webkit-fill-available;
  padding: 0 2rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  &--mobile {
    font-size: 1.6rem;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  &--desktop {
    display: none;
    @media screen and (min-width: 1024px) {
      display: grid;
      justify-items: center;
      grid-area: 1 / 2 / 2 / 3;
    }
  }

  &__copyright {
    grid-area: 1 / 1 / 2 / 2;
    max-width: 40rem;
  }
}
</style>
