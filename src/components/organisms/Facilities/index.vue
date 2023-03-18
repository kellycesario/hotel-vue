<script setup>
import Text from "@atoms/Text/index.vue";
import Button from "@atoms/Button/index.vue";
import FacilitiesList from "@molecules/FacilitiesList/index.vue";
import FacilitiesDetails from "@molecules/FacilitiesDetails/index.vue";
</script>

<template>
  <section class="facilities">
    <article class="facilities__headline">
      <h2 class="facilities__title">We do our best: our facilities for you</h2>
      <Text
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
      />
      <Button label="Contact Now" to="#/contact" />
    </article>
    <FacilitiesList />
  </section>
  <FacilitiesDetails />
</template>

<style lang="scss" scoped>
.facilities {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;
  width: min-content;

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    width: fit-content;
  }

  &__headline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }

  &__title {
    @include h2;
  }
}
</style>
