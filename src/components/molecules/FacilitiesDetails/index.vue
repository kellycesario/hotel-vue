<script setup>
import { useStore } from "@store";
const { hotelFacilitiesDetails } = useStore();
</script>

<template>
  <article class="facilitiesDetails">
    <div class="facilitiesDetails__container">
      <h3 class="facilitiesDetails__title">
        {{ hotelFacilitiesDetails[0]?.label }}
      </h3>
      <svg width="40" height="40" viewBox="0 0 56 56">
        <use
          :href="hotelFacilitiesDetails[0]?.icon"
          :xlinkHref="hotelFacilitiesDetails[0]?.icon"
        />
      </svg>
    </div>
    <p class="facilitiesDetails__description">
      {{ hotelFacilitiesDetails[0]?.text }}
    </p>
  </article>
</template>

<style lang="scss" scoped>
.facilitiesDetails {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
  gap: 2rem;
  
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    padding: 0 10rem;
    gap: 10rem;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px) {
      gap: 2rem;
    }
  }

  &__title {
    @include h3;
  }

  &__description {
    @include default-text;
  }
}
</style>
