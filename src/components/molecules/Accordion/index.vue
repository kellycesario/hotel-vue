<script setup>
import { ref } from "vue";
import footerItems from "@db/footerItems.json";

const value = ref([false, false, false]);
const items = ref(footerItems);
</script>

<template>
  <va-accordion v-model="value">
    <va-collapse
      v-for="(item, index) in items"
      :key="index"
      :header="item.title"
      text-color="textPrimary"
      color="textInverted"
      flat
    >
      <div style="padding: 0 1rem 0.75rem">
        <RouterLink
          v-for="(navItem, index) in item.items"
          :key="index"
          class="nav-item"
          :to="navItem.to"
        >
          {{ navItem.label }}
        </RouterLink>
      </div>
    </va-collapse>
  </va-accordion>
</template>

<style lang="scss">
@import "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

.nav-item {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  color: black !important;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--lightGray);
  }
}
</style>
