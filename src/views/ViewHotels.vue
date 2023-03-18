<script setup>
import Hero from "@molecules/Hero/index.vue";
import CardsWrapper from "@organisms/CardsWrapper/index.vue";
import banner from "/images/hero-banner2.jpg";

</script>
<template>
  <Hero
    title="See our selection of hotels for you here"
    video="https://www.youtube.com/watch?v=T7QA_yNEYFg"
    :image=banner
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
  <CardsWrapper
    title="These are our Most Popular Hotels"
    label="Contact Now"
    to="#/contact"
    startIndex="0"
    endIndex="10"
  />
</template>
<style lang="scss" scoped></style>
