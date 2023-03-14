<script setup>
import Hero from "@molecules/Hero/index.vue";
import Form from "@molecules/Form/index.vue";
import banner from "/images/hero-banner4.webp";

</script>
<template>
  <Hero
    title="Contact us for more information"
    video="https://www.youtube.com/watch?v=uVyBNJKNieU"
    :image=banner
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
  <Form />
</template>
<style lang="scss" scoped></style>
