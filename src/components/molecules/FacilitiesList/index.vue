<script setup>
import FacilityItem from "@atoms/FacilityItem/index.vue";
import facilities from "@db/facilities.json";
import { useStore } from "@store";
import { ref } from "vue";

const { hotelFacilitiesDetails, setHotelFacilitiesDetails } = useStore();
const items = ref(facilities);
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <FacilityItem
        v-for="item in items"
        :key="item.label"
        :icon="item.icon"
        :label="item.label"
        :id="item.id"
        @click="setHotelFacilitiesDetails(item)"
      />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: center;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, auto);
    }

    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(4, auto);
    }
  }
}
</style>
