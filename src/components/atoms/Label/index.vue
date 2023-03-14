<script setup>

const label = defineProps({
  text: String,
});

</script>
<template>
  <label class="label">
    {{ text }}
  </label>
</template>
<style lang="scss" scoped>
.label {
  @include regular-label;
}
</style>
