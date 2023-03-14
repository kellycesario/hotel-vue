<script setup>
const label = defineProps({
  type: String,
  id: String,
});
</script>
<template>
  <input :type="type" :id="id" class="input" />
</template>
<style lang="scss" scoped>
.input {
@include input;
}
</style>
