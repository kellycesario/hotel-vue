<script setup>
const text = defineProps({
  content: String,
});
</script>

<template>
  <p class="text">{{ content }}</p>
</template>

<style lang="scss" scoped>
.text {
  @include default-text;
}
</style>
