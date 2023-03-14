<script setup>
import Hero from "@molecules/Hero/index.vue";
import Facilities from "@organisms/Facilities/index.vue";
import banner from "/images/hero-banner3.webp";

</script>
<template>
  <Hero
    title="Discover about our proposal for you"
    video="https://www.youtube.com/watch?v=y6bpTMGyXGE"
    :image=banner
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
  <Facilities />
</template>
<style lang="scss" scoped></style>
